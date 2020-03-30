import { convertBanTypes } from "../ban-types";

describe(convertBanTypes, () => {
    test("conversion without arguments", () => {
        const result = convertBanTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/ban-types",
                },
            ],
        });
    });

    test("conversion with arguments", () => {
        const result = convertBanTypes({
            ruleArguments: [
                ["Object", "Use {} instead."],
                ["String"],
                ["Number"],
                ["Boolean", "Use 'boolean' instead."],
                [], // empty array: this should be ignored
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/ban-types",
                    ruleArguments: [
                        {
                            types: {
                                Object: {
                                    message: "Use {} instead.",
                                },
                                String: null,
                                Number: null,
                                Boolean: {
                                    message: "Use 'boolean' instead.",
                                },
                            },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with duplicated arguments", () => {
        const result = convertBanTypes({
            ruleArguments: [["Object", "Use {} instead."], ["Object"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/ban-types",
                    ruleArguments: [
                        {
                            types: {
                                Object: null,
                            },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with duplicated arguments", () => {
        const result = convertBanTypes({
            ruleArguments: ["!!!this-is-not-array!!!"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/ban-types",
                },
            ],
        });
    });
});
