import { RuleConverter } from "../ruleConverter";

export const convertNoSuspiciousComment: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0
                    ? {
                          notices: [
                              "ESLint's no-warning-comments does not allow an array of terms to match.",
                          ],
                      }
                    : {}),
                ruleArguments: [
                    {
                        location: "anywhere",
                        terms: ["BUG", "HACK", "FIXME", "LATER", "LATER2", "TODO"],
                    },
                ],
                ruleName: "no-warning-comments",
            },
        ],
    };
};
