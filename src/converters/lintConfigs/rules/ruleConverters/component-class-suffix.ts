import { RuleConverter } from "../ruleConverter";

export const convertComponentClassSuffix: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            suffixes: tslintRule.ruleArguments,
                        },
                    ],
                }),
                ruleName: "@angular-eslint/component-class-suffix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
