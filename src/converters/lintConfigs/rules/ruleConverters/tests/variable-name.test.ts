import {
    ConstRequiredForAllCapsMsg,
    convertVariableName,
    ForbiddenLeadingTrailingIdentifierMsg,
    IgnoreLeadingTrailingIdentifierMsg,
} from "../variable-name";

describe(convertVariableName, () => {
    test("conversion without arguments", () => {
        const result = convertVariableName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with require-const-for-all-caps argument without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["require-const-for-all-caps"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-pascal-case argument without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-pascal-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-snake-case argument without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-snake-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-leading-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-trailing-underscore without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-trailing-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with require-const-for-all-caps argument and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format", "require-const-for-all-caps"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [ConstRequiredForAllCapsMsg],
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format", "allow-leading-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "allow",
                            trailingUnderscore: "forbid",
                        },
                    ],
                },
                {
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-trailing-underscore and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format", "allow-trailing-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "forbid",
                            trailingUnderscore: "allow",
                        },
                    ],
                },
                {
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore, allow-trailing-underscore and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: [
                "check-format",
                "allow-leading-underscore",
                "allow-trailing-underscore",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "allow",
                            trailingUnderscore: "allow",
                        },
                    ],
                },
                {
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                    ruleName: "no-underscore-dangle",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "id-denylist",
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertVariableName({
            ruleArguments: [
                "check-format",
                "allow-leading-underscore",
                "allow-pascal-case",
                "allow-snake-case",
                "allow-trailing-underscore",
                "require-const-for-all-caps",
                "ban-keywords",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "variable",
                            format: ["camelCase", "UPPER_CASE"],
                            leadingUnderscore: "allow",
                            trailingUnderscore: "allow",
                        },
                    ],
                    notices: [ConstRequiredForAllCapsMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                    ruleSeverity: "off",
                },
                {
                    ruleName: "id-denylist",
                    ruleArguments: [
                        "any",
                        "Number",
                        "number",
                        "String",
                        "string",
                        "Boolean",
                        "boolean",
                        "Undefined",
                        "undefined",
                    ],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });
});
