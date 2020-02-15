import { convertTrailingComma } from "../trailing-comma";

describe(convertTrailingComma, () => {
    test("conversion without arguments", () => {
        const result = convertTrailingComma({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "comma-dangle",
                },
            ],
        });
    });

    describe("conversion with arguments using string values", () => {
        const testCases = [
            {
                argument: {
                    singleline: "never",
                },
                expectedRuleArguments: [],
            },
            {
                argument: {
                    singleline: "always",
                },
                expectedRuleArguments: [],
            },
            {
                argument: {
                    multiline: "never",
                },
                expectedRuleArguments: [],
            },
            {
                argument: {
                    multiline: "always",
                },
                expectedRuleArguments: ["always-multiline"],
            },
            {
                argument: {
                    singleline: "never",
                    multiline: "never",
                },
                expectedRuleArguments: [],
            },
            {
                argument: {
                    singleline: "never",
                    multiline: "always",
                },
                expectedRuleArguments: ["always-multiline"],
            },
            {
                argument: {
                    singleline: "always",
                    multiline: "never",
                },
                expectedRuleArguments: [],
            },
            {
                argument: {
                    singleline: "always",
                    multiline: "always",
                },
                expectedRuleArguments: ["always"],
            },
        ];

        testCases.forEach(testCase => {
            test(`conversion with arguments ${JSON.stringify(testCase.argument)}`, () => {
                const result = convertTrailingComma({
                    ruleArguments: [testCase.argument],
                });

                expect(result).toEqual({
                    rules: [
                        {
                            ruleName: "comma-dangle",
                            ...(testCase.expectedRuleArguments.length !== 0 && {
                                ruleArguments: testCase.expectedRuleArguments,
                            }),
                        },
                    ],
                });
            });
        });
    });

    describe("conversion with arguments using object values", () => {
        const testCases = [
            {
                argument: {
                    singleline: "never",
                    multiline: {
                        objects: "always",
                        arrays: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "always-multiline",
                        objects: "always-multiline",
                        functions: "always-multiline",
                        imports: "always-multiline",
                        exports: "always-multiline",
                    },
                ],
            },
            {
                argument: {
                    singleline: "always",
                    multiline: {
                        objects: "always",
                        arrays: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "always",
                        objects: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                ],
            },
            {
                argument: {
                    singleline: {
                        objects: "never",
                        arrays: "never",
                        functions: "never",
                        imports: "never",
                        exports: "never",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "never",
                        objects: "never",
                        functions: "never",
                        imports: "never",
                        exports: "never",
                    },
                ],
            },
            {
                argument: {
                    singleline: {
                        objects: "never",
                        arrays: "never",
                        functions: "never",
                    },
                    multiline: {
                        objects: "never",
                        arrays: "never",
                        functions: "never",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "never",
                        objects: "never",
                        functions: "never",
                    },
                ],
            },
            {
                argument: {
                    multiline: {
                        objects: "always",
                        arrays: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "always-multiline",
                        objects: "always-multiline",
                        functions: "always-multiline",
                        imports: "always-multiline",
                        exports: "always-multiline",
                    },
                ],
            },
            {
                argument: {
                    singleline: {
                        objects: "always",
                        arrays: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                    multiline: {
                        objects: "always",
                        arrays: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "always",
                        objects: "always",
                        functions: "always",
                        imports: "always",
                        exports: "always",
                    },
                ],
            },
            {
                argument: {
                    singleline: {
                        objects: "always",
                        arrays: "always",
                    },
                    multiline: {
                        objects: "always",
                        arrays: "always",
                        functions: "always",
                    },
                },
                expectedRuleArguments: [
                    {
                        arrays: "always",
                        objects: "always",
                        functions: "always-multiline",
                    },
                ],
            },
        ];

        testCases.forEach(testCase => {
            test(`conversion with arguments ${JSON.stringify(testCase.argument)}`, () => {
                const result = convertTrailingComma({
                    ruleArguments: [testCase.argument],
                });

                expect(result).toEqual({
                    rules: [
                        {
                            ruleName: "comma-dangle",
                            ...(testCase.expectedRuleArguments.length && {
                                ruleArguments: testCase.expectedRuleArguments,
                            }),
                        },
                    ],
                });
            });
        });
    });

    describe("conversion with not supported config", () => {
        const testCases = [
            {
                argument: {
                    esSpecCompliant: true,
                },
                expectedRuleArguments: [],
            },
            {
                argument: {
                    singleline: {
                        typeLiterals: "ignore",
                    },
                },
                expectedRuleArguments: [{}],
                expectedNotices: ["ESLint does not support config property typeLiterals"],
            },
            {
                argument: {
                    multiline: {
                        typeLiterals: "ignore",
                    },
                },
                expectedRuleArguments: [{}],
                expectedNotices: ["ESLint does not support config property typeLiterals"],
            },
            {
                argument: {
                    esSpecCompliant: true,
                    singleline: {
                        typeLiterals: "always",
                    },
                },
                expectedRuleArguments: [{}],
                expectedNotices: ["ESLint does not support config property typeLiterals"],
            },
            {
                argument: {
                    esSpecCompliant: false,
                    multiline: {
                        typeLiterals: "always-multiline",
                    },
                },
                expectedRuleArguments: [{}],
                expectedNotices: [
                    "ESLint only supports esSpecCompliant enabled",
                    "ESLint does not support config property typeLiterals",
                ],
            },
            {
                argument: {
                    esSpecCompliant: false,
                    singleline: {
                        typeLiterals: "ignore",
                    },
                    multiline: {
                        typeLiterals: "ignore",
                    },
                },
                expectedRuleArguments: [{}],
                expectedNotices: [
                    "ESLint only supports esSpecCompliant enabled",
                    "ESLint does not support config property typeLiterals",
                ],
            },
        ];

        testCases.forEach(testCase => {
            test(`conversion with arguments ${JSON.stringify(testCase.argument)}`, () => {
                const result = convertTrailingComma({
                    ruleArguments: [testCase.argument],
                });

                expect(result).toEqual({
                    rules: [
                        {
                            ruleName: "comma-dangle",
                            ...(testCase.expectedRuleArguments.length && {
                                ruleArguments: testCase.expectedRuleArguments,
                            }),
                            notices: testCase.expectedNotices,
                        },
                    ],
                });
            });
        });
    });
});
