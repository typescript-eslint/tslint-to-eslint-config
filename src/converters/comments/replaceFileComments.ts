import * as ts from "typescript";

import { ConversionError } from "../../errors/conversionError";
import { uniqueFromSources } from "../../utils";
import { RuleConverter } from "../lintConfigs/rules/ruleConverter";
import { FileComment } from "./parseFileComments";

export const replaceFileComments = (
    content: string,
    comments: FileComment[],
    converters: Map<string, RuleConverter>,
    ruleCommentsCache: Map<string, string[]>,
    ruleEquivalents: Map<string, string[]>,
) => {
    const getNewRuleLists = (ruleName: string) => {
        const cached = ruleEquivalents.get(ruleName) ?? ruleCommentsCache.get(ruleName);
        if (cached !== undefined) {
            return cached;
        }

        const converter = converters.get(ruleName);
        if (converter === undefined) {
            ruleCommentsCache.set(ruleName, []);
            return undefined;
        }

        const converted = converter({ ruleArguments: [] });
        if (converted instanceof ConversionError) {
            return undefined;
        }

        const equivalents = converted.rules.map((conversion) => conversion.ruleName);

        ruleCommentsCache.set(ruleName, equivalents);

        return equivalents.join(", ");
    };

    for (const comment of [...comments].reverse()) {
        const directive = comment.directive.replace("tslint:", "eslint-");
        const ruleLists = uniqueFromSources(comment.ruleNames.map(getNewRuleLists)).filter(Boolean);
        const [left, right] =
            comment.commentKind === ts.SyntaxKind.SingleLineCommentTrivia &&
            comment.directive !== "tslint:disable" &&
            comment.directive !== "tslint:enable"
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
