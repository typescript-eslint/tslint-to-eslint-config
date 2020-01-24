import { convertBan } from "../ban";

describe(convertBan, () => {
    test("conversion without arguments", () => {
        const result = convertBan({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                },
            ],
        });
    });

    test("conversion with single string argument", () => {
        const result = convertBan({
            ruleArguments: [true, "eval"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                    ruleArguments: [
                        2,
                        {
                            property: "eval",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with single array argument", () => {
        const result = convertBan({
            ruleArguments: [true, ["map"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                    ruleArguments: [
                        2,
                        {
                            property: "map",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with array argument but no message", () => {
        const result = convertBan({
            ruleArguments: [true, ["describe", "only"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                    ruleArguments: [
                        2,
                        {
                            object: "describe",
                            property: "only",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with array argument and message", () => {
        const result = convertBan({
            ruleArguments: [true, ["describe", "only", "use another method"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                    ruleArguments: [
                        2,
                        {
                            object: "describe",
                            property: "only",
                            message: "use another method",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with object argument and property name as string but no message", () => {
        const result = convertBan({
            ruleArguments: [true, { name: "$" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                    ruleArguments: [
                        2,
                        {
                            property: "$",
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with object argument and property name as array and message", () => {
        const result = convertBan({
            ruleArguments: [true, { name: ["it", "only"], message: "do not focus tests" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-properties",
                    ruleArguments: [
                        2,
                        {
                            object: "it",
                            property: "only",
                            message: "do not focus tests",
                        },
                    ],
                },
            ],
        });
    });
});
