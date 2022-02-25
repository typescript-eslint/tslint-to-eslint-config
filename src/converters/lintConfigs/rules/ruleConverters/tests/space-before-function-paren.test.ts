import { describe, expect, test } from "@jest/globals";

import { convertSpaceBeforeFunctionParen } from "../space-before-function-paren.js";

describe("convertSpaceBeforeFunctionParen", () => {
    test("conversion without arguments", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test("conversion with an argument (always)", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: ["always"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test("conversion with an argument (never)", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: ["never"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test("conversion with an argument (object)", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: [{ anonymous: "never" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ anonymous: "never" }],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test("conversion with all existing arguments", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: [
                {
                    anonymous: "never",
                    asyncArrow: "always",
                    constructor: "never",
                    method: "never",
                    named: "never",
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        'Option "constructor" is not supported by ESLint.',
                        'Option "method" is not supported by ESLint.',
                    ],
                    ruleArguments: [
                        {
                            anonymous: "never",
                            asyncArrow: "always",
                            named: "never",
                        },
                    ],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test('conversion with not supported options ["method", "constructor"]', () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: [
                {
                    constructor: "never",
                    method: "never",
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        'Option "constructor" is not supported by ESLint.',
                        'Option "method" is not supported by ESLint.',
                    ],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });
});
