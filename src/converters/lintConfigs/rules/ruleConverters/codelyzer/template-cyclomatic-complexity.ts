import { RuleConverter } from "../../ruleConverter";

export const convertTemplateCyclomaticComplexity: RuleConverter = (tslintRule) => {
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
                ruleName: "@angular-eslint/template/cyclomatic-complexity",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
