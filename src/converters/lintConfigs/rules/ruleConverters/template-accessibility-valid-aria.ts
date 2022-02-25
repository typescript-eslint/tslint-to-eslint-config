import { RuleConverter } from "../ruleConverter.js";

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
