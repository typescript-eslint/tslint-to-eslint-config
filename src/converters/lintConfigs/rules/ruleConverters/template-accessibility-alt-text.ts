import { RuleConverter } from "../ruleConverter";

export const convertTemplateAccessibilityAltText: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/accessibility-alt-text",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
