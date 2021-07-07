import * as path from "path";
import * as ts from "typescript";

import { parseJson } from "../../../utils";
import { EditorConfigConverter } from "../types";

const knownMissingSettings = [
    "tslint.alwaysShowRuleFailuresAsWarnings",
    "tslint.exclude",
    "tslint.ignoreDefinitionFiles",
    "tslint.jsEnable",
    "tslint.suppressWhileTypeErrorsPresent",
];

const getJsonRoot = (sourceFile: ts.SourceFile) => {
    const [rootStatement] = sourceFile.statements;

    return ts.isExpressionStatement(rootStatement) && ts.isObjectLiteralExpression(rootStatement.expression)
        ? rootStatement.expression
        : undefined;
}


export const convertVSCodeConfig: EditorConfigConverter = (rawEditorSettings, settings) => {
    const editorSettings: Record<string, string | number | symbol> = parseJson(rawEditorSettings);
    const missing = knownMissingSettings.filter((setting) => editorSettings[setting]);

    const autoFixOnSave =
        editorSettings["editor.codeActionsOnSave"] &&
        typeof editorSettings["editor.codeActionsOnSave"] === "object" &&
        editorSettings["editor.codeActionsOnSave"]?.["source.fixAll.tslint"];

    // Only create a new config file path if the input and output configs roughly match
    const eslintPathMatches =
        editorSettings["tslint.configFile"] &&
        typeof editorSettings["tslint.configFile"] === "string" &&
        !path.relative(
            path.dirname(editorSettings["tslint.configFile"]),
            path.dirname(settings.config),
        );

    // We can bail without making changes if there are no changes we need to make...
    if (!autoFixOnSave && !eslintPathMatches) {
        return { contents: rawEditorSettings, missing };
    }

    // ...or the JSON file doesn't seem to be a normal {} object root
    const sourceFile = ts.createSourceFile("settings.json", rawEditorSettings, ts.ScriptTarget.Latest, /*setParentNodes*/ true, ts.ScriptKind.JSON);
    const jsonRoot = getJsonRoot(sourceFile);
    if (!jsonRoot) {
        return { contents: rawEditorSettings, missing };
    }

    const propertyIndexByName = (properties: ts.NodeArray<ts.ObjectLiteralElementLike>, name: string) =>
        properties.findIndex(property => property.name && ts.isStringLiteral(property.name) && property.name.text === name);

    const transformer = (context: ts.TransformationContext) => (rootNode: ts.SourceFile): ts.SourceFile => {
        const upsertProperties = (node: ts.ObjectLiteralExpression, additions: readonly [string, string, unknown][]) => {
            const originalProperties = node.properties;

            for (const [parent, setting, value] of additions) {
                const createNewChild = (properties?: ts.NodeArray<ts.ObjectLiteralElementLike>) => {
                    return context.factory.createPropertyAssignment(
                        `"${parent}"`,
                        context.factory.createObjectLiteralExpression(
                            [
                                ...properties ?? [],
                                context.factory.createPropertyAssignment(
                                    `"${setting}"`,
                                    typeof value === "string"
                                        ? context.factory.createStringLiteral(value)
                                        : value
                                            ? context.factory.createTrue()
                                            : context.factory.createFalse()
                                )
                            ],
                            true
                        ),
                    );
                }

                const existingIndex = propertyIndexByName(originalProperties, parent);

                if (existingIndex !== -1) {
                    const existingProperty = originalProperties[existingIndex];
                    if (
                        !ts.isPropertyAssignment(existingProperty)
                        || !ts.isObjectLiteralExpression(existingProperty.initializer)
                        || propertyIndexByName(existingProperty.initializer.properties, `"${parent}"`) === -1) {
                        return node;
                    }

                    const updatedProperties = [...node.properties];
                    updatedProperties[existingIndex] = createNewChild(existingProperty.initializer.properties)
                    node = context.factory.createObjectLiteralExpression(updatedProperties, true);
                } else {
                    node = context.factory.createObjectLiteralExpression([...node.properties, createNewChild()], true);
                }
            }

            return node;
        };

        const visit = (node: ts.Node) => {
            node = ts.visitEachChild(node, visit, context);

            if (node !== jsonRoot) {
                return node;
            }

            const additions: [string, string, unknown][] = [];

            if (autoFixOnSave !== undefined) {
                additions.push(["editor.codeActionsOnSave", "eslint.autoFixOnSave", autoFixOnSave]);
            }

            if (eslintPathMatches !== undefined) {
                additions.push(["eslint.options", "configFile", settings.config]);
            }

            return upsertProperties(jsonRoot, additions);
        };

        return ts.visitNode(rootNode, visit)
    };

    const printer = ts.createPrinter(undefined);
    const result = ts.transform(sourceFile, [transformer]);
    const contents = printer.printFile(result.transformed[0])
        .replace(/^\(/giu, "")
        .replace(/\);(\r\n|\r|\n)*$/giu, "$1")
    result.dispose();

    return { contents, missing };
};
