import { RuleConverter } from "../../converter";

export const convertTemplateAccessibilityTabindexNoPositive: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-accessibility-tabindex-no-positive",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
