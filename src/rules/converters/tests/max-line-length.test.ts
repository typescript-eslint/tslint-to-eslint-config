import { convertMaxLineLength } from "../max-line-length";

describe(convertMaxLineLength, () => {
    test("conversion without arguments", () => {
        const result = convertMaxLineLength({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with one argument true value", () => {
        const result = convertMaxLineLength({
            ruleArguments: [true],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with two argument and first is false", () => {
        const result = convertMaxLineLength({
            ruleArguments: [false, 123],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with two arguments and second is number", () => {
        const result = convertMaxLineLength({
            ruleArguments: [true, 123],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ code: 123 }],
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with two arguments and second is object", () => {
        const result = convertMaxLineLength({
            ruleArguments: [
                true,
                {
                    limit: 123,
                    "ignore-pattern": "^import |^export {(.*?)}",
                    "check-strings": true,
                    "check-regex": true,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            code: 123,
                            ignorePattern: "^import |^export {(.*?)}",
                            ignoreStrings: false,
                            ignoreRegExpLiterals: false,
                        },
                    ],
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with check-strings inverting value true to false", () => {
        const result = convertMaxLineLength({
            ruleArguments: [
                true,
                {
                    limit: 123,
                    "check-strings": true,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            code: 123,
                            ignoreStrings: false,
                        },
                    ],
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with check-strings inverting value false to true", () => {
        const result = convertMaxLineLength({
            ruleArguments: [
                true,
                {
                    limit: 123,
                    "check-strings": false,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            code: 123,
                            ignoreStrings: true,
                        },
                    ],
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with check-regex inverting value true to false", () => {
        const result = convertMaxLineLength({
            ruleArguments: [
                true,
                {
                    limit: 123,
                    "check-regex": true,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            code: 123,
                            ignoreRegExpLiterals: false,
                        },
                    ],
                    ruleName: "max-len",
                },
            ],
        });
    });

    test("conversion with check-regex inverting value false to true", () => {
        const result = convertMaxLineLength({
            ruleArguments: [
                true,
                {
                    limit: 123,
                    "check-regex": false,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            code: 123,
                            ignoreRegExpLiterals: true,
                        },
                    ],
                    ruleName: "max-len",
                },
            ],
        });
    });
});
