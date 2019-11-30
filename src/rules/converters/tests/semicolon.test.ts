import { convertSemicolon } from "../semicolon";

describe(convertSemicolon, () => {
    test("conversion with always", () => {
        const result = convertSemicolon({
            ruleArguments: ["always"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "@typescript-eslint/semi",
                },
                {
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
                    ruleName: "@typescript-eslint/member-delimiter-style",
                },
            ],
        });
    });

    test("conversion with never", () => {
        const result = convertSemicolon({
            ruleArguments: ["never"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "@typescript-eslint/semi",
                },
                {
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
                    ruleName: "@typescript-eslint/member-delimiter-style",
                },
            ],
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
                    ruleName: "@typescript-eslint/member-delimiter-style",
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
                    ruleName: "@typescript-eslint/member-delimiter-style",
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
                "Option `strict-bound-class-methods` was found, there is no exact equivalent yet supported.",
            ],
        });
    });
});
