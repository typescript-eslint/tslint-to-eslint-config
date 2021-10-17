import { RuleConverter } from "../ruleConverter";

export const convertTemplateAccessibilityValidAria: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/accessibility-valid-aria",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
