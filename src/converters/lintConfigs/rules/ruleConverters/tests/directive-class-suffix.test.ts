import { describe, expect, test } from "@jest/globals";

import { convertDirectiveClassSuffix } from "../directive-class-suffix";

describe("convertDirectiveClassSuffix", () => {
    test("conversion without arguments", () => {
        const result = convertDirectiveClassSuffix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/directive-class-suffix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertDirectiveClassSuffix({
            ruleArguments: ["Directive", "View"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            suffixes: ["Directive", "View"],
                        },
                    ],
                    ruleName: "@angular-eslint/directive-class-suffix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
