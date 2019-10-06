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
                    notices: [
                        "Leading and trailing underscores (_) in variable names will now be ignored.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        "Leading or trailing underscores (_) on identifiers will now be forbidden.",
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
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
                    notices: [
                        "Leading and trailing underscores (_) in variable names will now be ignored.",
                        "ESLint's camel-case will throw a warning if const name is not uppercase.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        "Leading or trailing underscores (_) on identifiers will now be forbidden.",
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
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
                    notices: [
                        "Leading and trailing underscores (_) in variable names will now be ignored.",
                        "ESLint's camel-case rule does not allow pascal or snake case variable names. Those cases are reserved for class names and static methods.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        "Leading or trailing underscores (_) on identifiers will now be forbidden.",
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
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
                    notices: [
                        "Leading and trailing underscores (_) in variable names will now be ignored.",
                        "ESLint's camel-case rule does not allow pascal or snake case variable names. Those cases are reserved for class names and static methods.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        "Leading or trailing underscores (_) on identifiers will now be forbidden.",
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
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
                    notices: [
                        "Leading and trailing underscores (_) in variable names will now be ignored.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [
                        "Leading or trailing underscores (_) on identifiers will now be forbidden.",
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
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
                    notices: ["Leading undescores in variable names will now be ignored."],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [
                        "Leading and trailing underscores (_) on identifiers will now be ignored.",
                    ],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
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
                    notices: [
                        "ESLint's camel-case will throw a warning if const name is not uppercase.",
                        "ESLint's camel-case rule does not allow pascal or snake case variable names. Those cases are reserved for class names and static methods.",
                    ],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [
                        "Leading and trailing underscores (_) on identifiers will now be ignored.",
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
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });
});
