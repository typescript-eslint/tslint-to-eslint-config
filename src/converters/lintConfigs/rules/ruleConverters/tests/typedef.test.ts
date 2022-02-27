import { describe, expect, test } from "@jest/globals";

import { convertTypedef } from "../typedef";

describe("convertTypedef", () => {
    test("conversion without arguments", () => {
        const result = convertTypedef({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/typedef",
                },
                {
                    ruleName: "@typescript-eslint/explicit-function-return-type",
                },
                {
                    ruleName: "@typescript-eslint/explicit-module-boundary-types",
                },
            ],
        });
    });

    test("conversion with a few arguments", () => {
        const result = convertTypedef({
            ruleArguments: [
                "parameter",
                "variable-declaration-ignore-function",
                "array-destructuring",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            parameter: true,
                            variableDeclarationIgnoreFunction: true,
                            arrayDestructuring: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/typedef",
                },
                {
                    ruleName: "@typescript-eslint/explicit-function-return-type",
                },
                {
                    ruleName: "@typescript-eslint/explicit-module-boundary-types",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertTypedef({
            ruleArguments: [
                "parameter",
                "arrow-parameter",
                "property-declaration",
                "variable-declaration",
                "variable-declaration-ignore-function",
                "member-variable-declaration",
                "object-destructuring",
                "array-destructuring",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            parameter: true,
                            arrowParameter: true,
                            propertyDeclaration: true,
                            variableDeclaration: true,
                            variableDeclarationIgnoreFunction: true,
                            memberVariableDeclaration: true,
                            objectDestructuring: true,
                            arrayDestructuring: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/typedef",
                },
                {
                    ruleName: "@typescript-eslint/explicit-function-return-type",
                },
                {
                    ruleName: "@typescript-eslint/explicit-module-boundary-types",
                },
            ],
        });
    });

    test("conversion with call-signature", () => {
        const result = convertTypedef({
            ruleArguments: ["call-signature"],
        });

        expect(result).toEqual({
            notices: [
                "ESLint does not differentiate between the call signatures of arrow and non-arrow functions. Both will be checked",
            ],
            rules: [
                {
                    ruleName: "@typescript-eslint/typedef",
                },
                {
                    ruleArguments: [
                        {
                            allowExpressions: false,
                            allowTypedFunctionExpressions: false,
                            allowHigherOrderFunctions: false,
                            allowDirectConstAssertionInArrowFunctions: true,
                            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/explicit-function-return-type",
                },
                {
                    ruleArguments: [
                        {
                            allowArgumentsExplicitlyTypedAsAny: true,
                            allowDirectConstAssertionInArrowFunctions: true,
                            allowHigherOrderFunctions: false,
                            allowTypedFunctionExpressions: false,
                        },
                    ],
                    ruleName: "@typescript-eslint/explicit-module-boundary-types",
                },
            ],
        });
    });

    test("conversion with arrow-call-signature", () => {
        const result = convertTypedef({
            ruleArguments: ["arrow-call-signature"],
        });

        expect(result).toEqual({
            notices: [
                "ESLint does not differentiate between the call signatures of arrow and non-arrow functions. Both will be checked",
            ],
            rules: [
                {
                    ruleName: "@typescript-eslint/typedef",
                },
                {
                    ruleArguments: [
                        {
                            allowExpressions: false,
                            allowTypedFunctionExpressions: false,
                            allowHigherOrderFunctions: false,
                            allowDirectConstAssertionInArrowFunctions: true,
                            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/explicit-function-return-type",
                },
                {
                    ruleArguments: [
                        {
                            allowArgumentsExplicitlyTypedAsAny: true,
                            allowDirectConstAssertionInArrowFunctions: true,
                            allowHigherOrderFunctions: false,
                            allowTypedFunctionExpressions: false,
                        },
                    ],
                    ruleName: "@typescript-eslint/explicit-module-boundary-types",
                },
            ],
        });
    });
});
