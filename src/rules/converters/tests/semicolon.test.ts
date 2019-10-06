import { convertSemicolon } from "../semicolon";

describe(convertSemicolon, () => {
    test("conversion with always", () => {
        const result = convertSemicolon({
            ruleArguments: ["always"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["always"],
                },
                {
                    ruleName: "@typescript-estlint/member-delimiter-style",
                    ruleArguments: [
                        "error",
                        {
                            multiline: {
                                delimiter: "semi",
                                requireLast: true,
                            },
                            singleline: {
                                delimiter: "semi",
                                requireLast: false,
                            },
                        },
                    ],
                },
            ],
            notices: ["You must disable the base rule (semi) as it can report incorrect errors."],
        });
    });

    test("conversion with never", () => {
        const result = convertSemicolon({
            ruleArguments: ["never"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["never"],
                },
                {
                    ruleName: "@typescript-estlint/member-delimiter-style",
                    ruleArguments: [
                        "error",
                        {
                            multiline: {
                                delimiter: "none",
                                requireLast: true,
                            },
                            singleline: {
                                delimiter: "semi",
                                requireLast: false,
                            },
                        },
                    ],
                },
            ],
            notices: ["You must disable the base rule (semi) as it can report incorrect errors."],
        });
    });

    test("conversion with always and strict bound class methods", () => {
        const result = convertSemicolon({
            ruleArguments: ["always", "strict-bound-class-methods"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["always"],
                },
                {
                    ruleName: "@typescript-estlint/member-delimiter-style",
                    ruleArguments: [
                        "error",
                        {
                            multiline: {
                                delimiter: "semi",
                                requireLast: true,
                            },
                            singleline: {
                                delimiter: "semi",
                                requireLast: false,
                            },
                        },
                    ],
                },
            ],
            notices: [
                "You must disable the base rule (semi) as it can report incorrect errors.",
                "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
            ],
        });
    });

    test("conversion with never and strict bound class methods", () => {
        const result = convertSemicolon({
            ruleArguments: ["never", "strict-bound-class-methods"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["never"],
                },
                {
                    ruleName: "@typescript-estlint/member-delimiter-style",
                    ruleArguments: [
                        "error",
                        {
                            multiline: {
                                delimiter: "none",
                                requireLast: true,
                            },
                            singleline: {
                                delimiter: "semi",
                                requireLast: false,
                            },
                        },
                    ],
                },
            ],
            notices: [
                "You must disable the base rule (semi) as it can report incorrect errors.",
                "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
            ],
        });
    });

    test("conversion with always and ignore interfaces", () => {
        const result = convertSemicolon({
            ruleArguments: ["always", "ignore-interfaces"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["always"],
                },
            ],
            notices: ["You must disable the base rule (semi) as it can report incorrect errors."],
        });
    });

    test("conversion with never and ignore interfaces", () => {
        const result = convertSemicolon({
            ruleArguments: ["never", "ignore-interfaces"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["never"],
                },
            ],
            notices: ["You must disable the base rule (semi) as it can report incorrect errors."],
        });
    });

    test("conversion with always, strict bound class methods and ignore interfaces", () => {
        const result = convertSemicolon({
            ruleArguments: ["always", "ignore-interfaces", "strict-bound-class-methods"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["always"],
                },
            ],
            notices: [
                "You must disable the base rule (semi) as it can report incorrect errors.",
                "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
            ],
        });
    });

    test("conversion with always, strict bound class methods and ignore interfaces", () => {
        const result = convertSemicolon({
            ruleArguments: ["never", "ignore-interfaces", "strict-bound-class-methods"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/semi",
                    ruleArguments: ["never"],
                },
            ],
            notices: [
                "You must disable the base rule (semi) as it can report incorrect errors.",
                "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
            ],
        });
    });
});
