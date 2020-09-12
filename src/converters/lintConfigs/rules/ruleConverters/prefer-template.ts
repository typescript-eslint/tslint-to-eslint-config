import { RuleConverter } from "../ruleConverter";

export const convertPreferTemplate: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                // Alas, https://github.com/eslint/eslint/issues/10017
                ...(tslintRule.ruleArguments.includes("allow-single-concat") && {
                    notices: ["Single concatenations will no longer be ignored."],
                }),
                ruleName: "prefer-template",
            },
        ],
    };
};
