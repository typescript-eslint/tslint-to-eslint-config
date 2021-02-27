import { RuleConverter } from "../../ruleConverter";

export const convertTemplateConditionalComplexity: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/conditional-complexity",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
