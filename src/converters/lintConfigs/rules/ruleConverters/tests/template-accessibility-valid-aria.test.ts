import { describe, expect, test } from "@jest/globals";

import { convertTemplateAccessibilityValidAria } from "../template-accessibility-valid-aria";

describe("convertTemplateAccessibilityValidAria", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityValidAria({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/accessibility-valid-aria",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
