import { RuleConverter } from "../ruleConverter.js";

export const convertComponentSelector: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            type: tslintRule.ruleArguments[0],
                            prefix: tslintRule.ruleArguments[1],
                            style: tslintRule.ruleArguments[2],
                        },
                    ],
                }),
                ruleName: "@angular-eslint/component-selector",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
