import { RuleConverter } from "../../ruleConverter";

export const convertTemplateAccessibilityLabelFor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/accessibility-label-for",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
