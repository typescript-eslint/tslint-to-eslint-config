import { describe, expect, test } from "@jest/globals";

import {
    convertStrictBooleanExpressions,
    ForbiddenOtherNonBooleanTypes,
} from "../strict-boolean-expressions";

describe("convertStrictBooleanExpressions", () => {
    test("conversion without arguments", () => {
        const result = convertStrictBooleanExpressions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                },
            ],
        });
    });

    test("conversion with true argument", () => {
        const result = convertStrictBooleanExpressions({
            ruleArguments: [true],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [ForbiddenOtherNonBooleanTypes],
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                },
            ],
        });
    });

    test("conversion with allow-undefined-union argument", () => {
        const result = convertStrictBooleanExpressions({
            ruleArguments: [true, "allow-undefined-union"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [ForbiddenOtherNonBooleanTypes],
                    ruleArguments: [
                        {
                            allowNullable: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                },
            ],
        });
    });

    test("conversion with ignore-rhs argument", () => {
        const result = convertStrictBooleanExpressions({
            ruleArguments: [true, "ignore-rhs"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [ForbiddenOtherNonBooleanTypes],
                    ruleArguments: [
                        {
                            ignoreRhs: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertStrictBooleanExpressions({
            ruleArguments: [
                true,
                "allow-undefined-union",
                "allow-boolean-or-undefined",
                "allow-null-union",
                "ignore-rhs",
                "allow-string",
                "allow-enum",
                "allow-number",
                "allow-mix",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [ForbiddenOtherNonBooleanTypes],
                    ruleArguments: [
                        {
                            allowNullable: true,
                            ignoreRhs: true,
                        },
                    ],
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                },
            ],
        });
    });
});
