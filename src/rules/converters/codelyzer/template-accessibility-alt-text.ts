import { RuleConverter } from "../../converter";

export const convertTemplateAccessibilityAltText: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-accessibility-alt-text",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
