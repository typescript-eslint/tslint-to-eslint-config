import { RuleConverter } from "../../converter";

export const convertTemplateAccessibilityElementsContent: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-accessibility-elements-content",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
