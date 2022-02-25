import { RuleConverter } from "../ruleConverter.js";

type CommentFormatOptions = {
    "ignore-words": string[];
    "ignore-pattern": string;
};

export const CapitalizedIgnoreMessage = "Only accepts a single string pattern to be ignored.";

export const convertCommentFormat: RuleConverter = (tslintRule) => {
    const capitalizedRuleArguments: string[] = [];
    const capitalizedNotices: string[] = [];
    const checkSpace = tslintRule.ruleArguments.includes("check-space");

    if (tslintRule.ruleArguments.includes("check-uppercase")) {
        capitalizedRuleArguments.push("always");
    } else if (tslintRule.ruleArguments.includes("check-lowercase")) {
        capitalizedRuleArguments.push("never");
    }

    if (typeof tslintRule.ruleArguments[tslintRule.ruleArguments.length - 1] === "object") {
        const objectArgument: CommentFormatOptions =
            tslintRule.ruleArguments[tslintRule.ruleArguments.length - 1];
        if (objectArgument["ignore-words"]?.length || objectArgument["ignore-pattern"]) {
            capitalizedNotices.push(CapitalizedIgnoreMessage);
        }
    }

    return {
        rules: [
            ...(capitalizedRuleArguments.length === 0
                ? []
                : [
                      {
                          ruleName: "capitalized-comments",
                          ruleArguments: capitalizedRuleArguments,
                          ...(capitalizedNotices.length !== 0 && { notices: capitalizedNotices }),
                      },
                  ]),
            ...(checkSpace
                ? [
                      {
                          ruleName: "spaced-comment",
                          ruleArguments: [
                              "always",
                              {
                                  markers: ["/"],
                              },
                          ],
                      },
                  ]
                : []),
        ],
    };
};
