import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateAccessibilityTabindexNoPositive: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/no-positive-tabindex",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
