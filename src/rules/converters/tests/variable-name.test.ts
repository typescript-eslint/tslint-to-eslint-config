import { convertVariableName } from "../variable-name";

describe(convertVariableName, () => {
    test("conversion without arguments", () => {
        const result = convertVariableName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                    notices: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with require-const-for-all-caps argument", () => {
        const result = convertVariableName({
            ruleArguments: ["require-const-for-all-caps"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                        'The argument "require-const-for-all-caps" is not needed as ESlint will decide if a variable is a constant (all uppercase). If not, a warning will be thrown.',
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                    notices: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-pascal-case argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-pascal-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                        "This rule does not allow pascal neither snake case to variable names. Those are reserved for class names and static methods.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                    notices: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-snake-case argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-snake-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                        "This rule does not allow pascal neither snake case to variable names. Those are reserved for class names and static methods.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                    notices: [],
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
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                    notices: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore with check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format", "allow-leading-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                        'If either "allow-leading-underscore" or "allow-trailing-underscore" are provided, "no-underscore-dangle" will be turned off.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                    notices: [],
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
                    ruleName: "camelcase",
                    ruleArguments: [],
                    notices: [
                        "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
                        'The argument "require-const-for-all-caps" is not needed as ESlint will decide if a variable is a constant (all uppercase). If not, a warning will be thrown.',
                        "This rule does not allow pascal neither snake case to variable names. Those are reserved for class names and static methods.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [
                        'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
                        'If either "allow-leading-underscore" or "allow-trailing-underscore" are provided, "no-underscore-dangle" will be turned off.',
                    ],
                },
                {
                    ruleName: "id-blacklist",
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
                    notices: [
                        'If "ban-keywords" was provided, ESLint has to disallows the use of certain TypeScript keywords by using "id-blacklist" rule.',
                    ],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });
});
