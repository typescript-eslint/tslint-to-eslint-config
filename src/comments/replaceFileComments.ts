import * as ts from "typescript";

import { RuleConverter } from "../rules/converter";
import { uniqueFromSources } from "../utils";
import { ConversionError } from "../errors/conversionError";
import { FileComment } from "./parseFileComments";

export const replaceFileComments = (
    content: string,
    comments: FileComment[],
    converters: Map<string, RuleConverter>,
    ruleConversionCache: Map<string, string | undefined>,
) => {
    const getNewRuleLists = (ruleName: string) => {
        if (ruleConversionCache.has(ruleName)) {
            return ruleConversionCache.get(ruleName);
        }

        const converter = converters.get(ruleName);
        if (converter === undefined) {
            ruleConversionCache.set(ruleName, undefined);
            return undefined;
        }

        const converted = converter({ ruleArguments: [] });
        return converted instanceof ConversionError
            ? undefined
            : converted.rules.map((conversion) => conversion.ruleName).join(", ");
    };

    for (const comment of [...comments].reverse()) {
        const directive = comment.directive
            .replace("tslint:", "eslint-")
            .replace("next-line", "line");
        const ruleLists = uniqueFromSources(comment.ruleNames.map(getNewRuleLists)).filter(Boolean);
        const [left, right] =
            comment.commentKind === ts.SyntaxKind.SingleLineCommentTrivia
                ? ["// ", ""]
                : ["/* ", " */"];

        content = [
            content.slice(0, comment.pos),
            left,
            directive,
            ruleLists.length !== 0 && " ",
            ruleLists.join(", "),
            right,
            content.slice(comment.end),
        ]
            .filter(Boolean)
            .join("");
    }

    return content;
};
