import { describe, expect, test } from "@jest/globals";

import { convertTemplateCyclomaticComplexity } from "../template-cyclomatic-complexity.js";

describe("convertTemplateCyclomaticComplexity", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateCyclomaticComplexity({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/cyclomatic-complexity",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertTemplateCyclomaticComplexity({
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
                    ruleName: "@angular-eslint/template/cyclomatic-complexity",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
