import { describe, expect, test } from "@jest/globals";

import { convertNoTrailingWhitespace } from "../no-trailing-whitespace";

describe("convertNoTrailingWhitespace", () => {
    test("conversion without arguments", () => {
        const result = convertNoTrailingWhitespace({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-trailing-spaces",
                },
            ],
        });
    });

    test("conversion with ignore-template-strings argument", () => {
        const result = convertNoTrailingWhitespace({
            ruleArguments: ["ignore-template-strings"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint does not support ignoring template strings."],
                    ruleName: "no-trailing-spaces",
                },
            ],
        });
    });

    test("conversion with ignore-comments argument", () => {
        const result = convertNoTrailingWhitespace({
            ruleArguments: ["ignore-comments"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ ignoreComments: true }],
                    ruleName: "no-trailing-spaces",
                },
            ],
        });
    });

    test("conversion with ignore-jsdoc argument", () => {
        const result = convertNoTrailingWhitespace({
            ruleArguments: ["ignore-jsdoc"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint does not support ignoring JSDoc."],
                    ruleName: "no-trailing-spaces",
                },
            ],
        });
    });

    test("conversion with ignore-blank-lines argument", () => {
        const result = convertNoTrailingWhitespace({
            ruleArguments: ["ignore-blank-lines"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ skipBlankLines: true }],
                    ruleName: "no-trailing-spaces",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertNoTrailingWhitespace({
            ruleArguments: [
                "ignore-template-strings",
                "ignore-comments",
                "ignore-jsdoc",
                "ignore-blank-lines",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint does not support ignoring template strings.",
                        "ESLint does not support ignoring JSDoc.",
                    ],
                    ruleArguments: [{ ignoreComments: true }, { skipBlankLines: true }],
                    ruleName: "no-trailing-spaces",
                },
            ],
        });
    });
});
