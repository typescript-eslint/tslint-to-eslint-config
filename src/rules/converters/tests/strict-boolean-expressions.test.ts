import {
    convertStrictBooleanExpressions,
    ForbiddenOtherNonBooleanTypes,
} from "../strict-boolean-expressions";

describe(convertStrictBooleanExpressions, () => {
    test("conversion without arguments", () => {
        const result = convertStrictBooleanExpressions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                    ruleArguments: [],
                    notices: [],
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
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                    ruleArguments: [],
                    notices: [ForbiddenOtherNonBooleanTypes],
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
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                    ruleArguments: [
                        {
                            allowNullable: true,
                        },
                    ],
                    notices: [ForbiddenOtherNonBooleanTypes],
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
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                    ruleArguments: [
                        {
                            ignoreRhs: true,
                        },
                    ],
                    notices: [ForbiddenOtherNonBooleanTypes],
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
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                    ruleArguments: [
                        {
                            allowNullable: true,
                            ignoreRhs: true,
                        },
                    ],
                    notices: [ForbiddenOtherNonBooleanTypes],
                },
            ],
        });
    });
});
