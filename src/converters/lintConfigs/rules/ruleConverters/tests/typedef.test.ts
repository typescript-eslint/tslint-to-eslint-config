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
            ],
        });
    });
});
