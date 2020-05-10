import { convertTemplateAccessibilityTabindexNoPositive } from "../template-accessibility-tabindex-no-positive";

describe(convertTemplateAccessibilityTabindexNoPositive, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityTabindexNoPositive({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template-accessibility-tabindex-no-positive",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
