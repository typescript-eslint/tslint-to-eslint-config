import { merge } from "lodash";
import * as path from "path";

import { parseJson } from "../../../utils";
import { EditorConfigConverter } from "../types";

const knownMissingSettings = [
    "tslint.alwaysShowRuleFailuresAsWarnings",
    "tslint.exclude",
    "tslint.ignoreDefinitionFiles",
    "tslint.jsEnable",
    "tslint.suppressWhileTypeErrorsPresent",
];

export const convertVSCodeConfig: EditorConfigConverter = (rawEditorSettings, settings) => {
    const editorSettings: Record<string, string | number | symbol> = parseJson(rawEditorSettings);
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

    const contents = JSON.stringify(
        merge(
            {},
            editorSettings,
            autoFixOnSave !== undefined && {
                "editor.codeActionsOnSave": {
                    "eslint.autoFixOnSave": autoFixOnSave,
                },
            },
            eslintPathMatches && {
                "eslint.options": {
                    configFile: settings.config,
                },
            },
        ),
        null,
        4,
    );

    const missing = knownMissingSettings.filter((setting) => editorSettings[setting]);

    return { contents, missing };
};
