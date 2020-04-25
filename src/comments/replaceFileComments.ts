import * as ts from "typescript";

import { RuleConverter } from "../rules/converter";
import { FileComment } from "./parseFileComments";
import { uniqueFromSources } from "../utils";
import { ConversionError } from "../errors/conversionError";

export type ReplaceFileCommentsDependencies = {
    converters: Map<string, RuleConverter>;
};

export const replaceFileComments = (
    dependencies: ReplaceFileCommentsDependencies,
    content: string,
    comments: FileComment[],
    ruleConversionCache: Map<string, string | undefined>,
) => {
    const getNewRuleLists = (ruleName: string) => {
        if (ruleConversionCache.has(ruleName)) {
            return ruleConversionCache.get(ruleName);
        }

        const converter = dependencies.converters.get(ruleName);
        if (converter === undefined) {
            ruleConversionCache.set(ruleName, undefined);
            return undefined;
        }

        const converted = converter({ ruleArguments: [] });
        return converted instanceof ConversionError
            ? undefined
            : converted.rules.map(conversion => conversion.ruleName).join(", ");
    };

    for (const comment of [...comments].reverse()) {
        const directive = comment.directive.replace("tslint:", "eslint-");
        const ruleLists = uniqueFromSources(comment.ruleNames.map(getNewRuleLists)).filter(Boolean);
        const [left, right] =
            comment.commentKind === ts.SyntaxKind.SingleLineCommentTrivia
                ? ["// ", ""]
                : ["/* ", " */"];

        content = [
            content.slice(0, comment.pos),
            `${left}${directive} ${ruleLists.join(", ")}${right}`,
            content.slice(comment.end),
        ].join("");
    }

    return content;
};
