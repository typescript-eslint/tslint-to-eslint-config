import { RuleConverter } from "../../ruleConverter";

export const convertTemplateAccessibilityLabelFor: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            ...(tslintRule.ruleArguments[0]?.controlComponents && { controlComponents: tslintRule.ruleArguments[0]?.controlComponents }),
                            ...(tslintRule.ruleArguments[0]?.labelAttributes && { labelAttributes: tslintRule.ruleArguments[0]?.labelAttributes }),
                            ...(tslintRule.ruleArguments[0]?.labelComponents && { labelComponents: tslintRule.ruleArguments[0]?.labelComponents }),
                        },
                    ],
                }),
                ruleName: "@angular-eslint/template/accessibility-label-for",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
