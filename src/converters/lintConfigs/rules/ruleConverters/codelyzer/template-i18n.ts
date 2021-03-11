import { RuleConverter } from "../../ruleConverter";

export const convertTemplateI18N: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            ...(tslintRule.ruleArguments.includes("check-id") && { checkId: true }),
                            ...(tslintRule.ruleArguments.includes("check-text") && { checkText: true }),
                        },
                    ],
                }),
                ruleName: "@angular-eslint/template/i18n",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
