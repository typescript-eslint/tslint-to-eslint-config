import { describe, expect, test } from "@jest/globals";

import { convertAlign } from "../align";

describe("convertAlign", () => {
    test("conversion without arguments", () => {
        const result = convertAlign({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "indent",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/indent",
                },
            ],
        });
    });

    test("conversion with align arguments", () => {
        const result = convertAlign({
            ruleArguments: ["arguments"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "indent",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: [
                        4,
                        {
                            CallExpression: { arguments: "first" },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with align elements", () => {
        const result = convertAlign({
            ruleArguments: ["elements"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "indent",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: [
                        4,
                        {
                            ArrayExpression: "first",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with align members", () => {
        const result = convertAlign({
            ruleArguments: ["members"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "indent",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: [
                        4,
                        {
                            ObjectExpression: "first",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with align parameters", () => {
        const result = convertAlign({
            ruleArguments: ["parameters"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "indent",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: [
                        4,
                        {
                            FunctionDeclaration: { parameters: "first" },
                            FunctionExpression: { parameters: "first" },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with align all", () => {
        const result = convertAlign({
            ruleArguments: ["parameters", "elements", "arguments", "members"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "indent",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: [
                        4,
                        {
                            ArrayExpression: "first",
                            CallExpression: { arguments: "first" },
                            FunctionDeclaration: { parameters: "first" },
                            FunctionExpression: { parameters: "first" },
                            ObjectExpression: "first",
                        },
                    ],
                },
            ],
        });
    });
});
