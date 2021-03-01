import { convertTemplateAccessibilityLabelFor } from "../template-accessibility-label-for";

describe(convertTemplateAccessibilityLabelFor, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityLabelFor({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/accessibility-label-for",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
