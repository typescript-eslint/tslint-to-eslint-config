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

    test("conversion with one argument number", () => {
        const result = convertMaxLineLength({
            ruleArguments: [123],
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

    test("conversion with one object argument", () => {
        const result = convertMaxLineLength({
            ruleArguments: [
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
