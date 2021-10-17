import { RuleConverter } from "../ruleConverter";

export const convertTemplateAccessibilityTableScope: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/accessibility-table-scope",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
