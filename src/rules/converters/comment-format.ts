import { RuleConverter } from "../converter";

export const CheckTrailingLowercaseMessage: string =
    "Only first trailing comment can be configured.";
export const CapitalizedIgnoreMessage: string =
    "Only accepts a single string pattern to be ignored.";

export const convertCommentFormat: RuleConverter = tslintRule => {
    const capitalizedRuleArguments: string[] = [];
    const spaceCommentRuleArguments: string[] = [];
    const capitalizedNotices: string[] = [];

    const hasCheckSpace = tslintRule.ruleArguments.includes("check-space");
    const hasCheckLowercase = tslintRule.ruleArguments.includes("check-lowercase");
    const hasCheckUppercase = tslintRule.ruleArguments.includes("check-uppercase");
    const hasCheckTrailingLowercase = tslintRule.ruleArguments.includes("allow-trailing-lowercase");

    if (!hasCheckSpace) {
        spaceCommentRuleArguments.push("never");
    }

    if (hasCheckUppercase) {
        capitalizedRuleArguments.push("always");
    } else if (hasCheckLowercase) {
        capitalizedRuleArguments.push("never");
    }

    if (hasCheckTrailingLowercase) {
        capitalizedNotices.push(CheckTrailingLowercaseMessage);
    }

    if (typeof tslintRule.ruleArguments[tslintRule.ruleArguments.length - 1] == "object") {
        const objectArgument: Object =
            tslintRule.ruleArguments[tslintRule.ruleArguments.length - 1];
        if (
            objectArgument.hasOwnProperty("ignore-words") ||
            objectArgument.hasOwnProperty("ignore-pattern")
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
