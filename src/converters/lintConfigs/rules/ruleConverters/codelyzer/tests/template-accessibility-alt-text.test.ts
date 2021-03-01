import { convertTemplateAccessibilityAltText } from "../template-accessibility-alt-text";

describe(convertTemplateAccessibilityAltText, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityAltText({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/accessibility-alt-text",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
