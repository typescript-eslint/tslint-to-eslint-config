import { RuleConverter } from "../converter";

type CommentFormatOptions = {
    "ignore-words": string[];
    "ignore-pattern": string;
};

export const CapitalizedIgnoreMessage = "Only accepts a single string pattern to be ignored.";

export const convertCommentFormat: RuleConverter = tslintRule => {
    const capitalizedRuleArguments: string[] = [];
    const spaceCommentRuleArguments: string[] = [];
    const capitalizedNotices: string[] = [];

    const hasCheckSpace = tslintRule.ruleArguments.includes("check-space");
    const hasCheckLowercase = tslintRule.ruleArguments.includes("check-lowercase");
    const hasCheckUppercase = tslintRule.ruleArguments.includes("check-uppercase");

    if (!hasCheckSpace) {
        spaceCommentRuleArguments.push("never");
    }

    if (hasCheckUppercase) {
        capitalizedRuleArguments.push("always");
    } else if (hasCheckLowercase) {
        capitalizedRuleArguments.push("never");
    }

    if (typeof tslintRule.ruleArguments[tslintRule.ruleArguments.length - 1] === "object") {
        const objectArgument: CommentFormatOptions =
            tslintRule.ruleArguments[tslintRule.ruleArguments.length - 1];
        if (
            (objectArgument["ignore-words"] && objectArgument["ignore-words"].length) ||
            objectArgument["ignore-pattern"]
        ) {
            capitalizedNotices.push(CapitalizedIgnoreMessage);
        }
    }

    return {
        rules: [
            {
                ruleName: "capitalized-comments",
                ruleArguments: capitalizedRuleArguments,
                notices: capitalizedNotices,
            },
            {
                ruleName: "spaced-comment",
                ruleArguments: spaceCommentRuleArguments,
            },
        ],
    };
};
