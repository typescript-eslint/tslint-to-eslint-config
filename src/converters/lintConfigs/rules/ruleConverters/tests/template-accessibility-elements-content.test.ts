import { describe, expect, test } from "@jest/globals";

import { convertTemplateAccessibilityElementsContent } from "../template-accessibility-elements-content";

describe("convertTemplateAccessibilityElementsContent", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityElementsContent({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/accessibility-elements-content",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
