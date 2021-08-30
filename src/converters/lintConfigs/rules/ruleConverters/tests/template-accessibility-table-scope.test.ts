import { convertTemplateAccessibilityTableScope } from "../template-accessibility-table-scope";

describe(convertTemplateAccessibilityTableScope, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityTableScope({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/accessibility-table-scope",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
