import { describe, expect, test } from "@jest/globals";

import { convertTemplateAccessibilityTabindexNoPositive } from "../template-accessibility-tabindex-no-positive";

describe("convertTemplateAccessibilityTabindexNoPositive", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityTabindexNoPositive({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/no-positive-tabindex",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
