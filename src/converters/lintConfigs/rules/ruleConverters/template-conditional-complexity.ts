import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateConditionalComplexity: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length === 1 && {
                    ruleArguments: [
                        {
                            maxComplexity: tslintRule.ruleArguments[0],
                        },
                    ],
                }),
                ruleName: "@angular-eslint/template/conditional-complexity",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
