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

    test("conversion with an argument", () => {
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
});
