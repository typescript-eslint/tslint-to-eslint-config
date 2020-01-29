import { RuleConverter } from "../converter";

type CommentFormatOptions = {
    "ignore-words": string[];
    "ignore-pattern": string;
};

export const CapitalizedIgnoreMessage = "Only accepts a single string pattern to be ignored.";

export const convertCommentFormat: RuleConverter = tslintRule => {
    const capitalizedRuleArguments: string[] = [];
    const spaceCommentRuleArguments: Array<string | { markers: string[] }> = [];
    const capitalizedNotices: string[] = [];

    if (!spaceCommentRuleArguments.includes("always")) {
        spaceCommentRuleArguments.push("always");
    }
    spaceCommentRuleArguments.push({ markers: ["/"] });

    if (tslintRule.ruleArguments.includes("check-uppercase")) {
        capitalizedRuleArguments.push("always");
    } else if (tslintRule.ruleArguments.includes("check-lowercase")) {
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
            ...(capitalizedRuleArguments.length === 0
                ? []
                : [
                      {
                          ruleName: "capitalized-comments",
                          ruleArguments: capitalizedRuleArguments,
                          ...(capitalizedNotices.length !== 0 && { notices: capitalizedNotices }),
                      },
                  ]),
            {
                ruleName: "spaced-comment",
                ...(spaceCommentRuleArguments.length !== 0 && {
                    ruleArguments: spaceCommentRuleArguments,
                }),
            },
        ],
    };
};
