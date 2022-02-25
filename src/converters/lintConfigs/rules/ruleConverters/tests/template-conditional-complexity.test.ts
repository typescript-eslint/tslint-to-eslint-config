import { describe, expect, test } from "@jest/globals";

import { convertTemplateConditionalComplexity } from "../template-conditional-complexity.js";

describe("convertTemplateConditionalComplexity", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateConditionalComplexity({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/conditional-complexity",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertTemplateConditionalComplexity({
            ruleArguments: [4],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            maxComplexity: 4,
                        },
                    ],
                    ruleName: "@angular-eslint/template/conditional-complexity",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
