import { RuleConverter } from "../ruleConverter";

export const convertPreferSwitch: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 &&
                    "min-cases" in tslintRule.ruleArguments[0] && {
                        ruleArguments: [{ minimumCases: tslintRule.ruleArguments[0]["min-cases"] }],
                    }),
                ruleName: "unicorn/prefer-switch",
            },
        ],
        plugins: ["eslint-plugin-unicorn"],
    };
};
