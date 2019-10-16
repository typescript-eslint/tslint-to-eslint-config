import {
    convertCommentFormat,
    CheckTrailingLowercaseMessage,
    CapitalizedIgnoreMessage,
} from "../comment-format";

describe(convertCommentFormat, () => {
    test("conversion without arguments", () => {
        const result = convertCommentFormat({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "capitalized-comments",
                    ruleArguments: [],
                    notices: [],
                },
                {
                    ruleName: "spaced-comment",
                    ruleArguments: ["never"],
                },
            ],
        });
    });

    test("conversion with check-space argument", () => {
        const result = convertCommentFormat({
            ruleArguments: ["check-space"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "capitalized-comments",
                    ruleArguments: [],
                    notices: [],
                },
                {
                    ruleName: "spaced-comment",
                    ruleArguments: [],
                },
            ],
        });
    });

    test("conversion with check-lowercase arguments", () => {
        const result = convertCommentFormat({
            ruleArguments: ["check-lowercase"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "capitalized-comments",
                    ruleArguments: ["never"],
                    notices: [],
                },
                {
                    ruleName: "spaced-comment",
                    ruleArguments: ["never"],
                },
            ],
        });
    });

    test("conversion with ignore-pattern argument", () => {
        const result = convertCommentFormat({
            ruleArguments: [{ "ignore-pattern": "STD\\w{2,3}\\b" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "capitalized-comments",
                    ruleArguments: [],
                    notices: [CapitalizedIgnoreMessage],
                },
                {
                    ruleName: "spaced-comment",
                    ruleArguments: ["never"],
                },
            ],
        });
    });

    test("conversion with ignore-words argument", () => {
        const result = convertCommentFormat({
            ruleArguments: [{ "ignore-words": ["TODO", "HACK"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "capitalized-comments",
                    ruleArguments: [],
                    notices: [CapitalizedIgnoreMessage],
                },
                {
                    ruleName: "spaced-comment",
                    ruleArguments: ["never"],
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertCommentFormat({
            ruleArguments: [
                "check-space",
                "check-lowercase",
                "check-uppercase",
                "allow-trailing-lowercase",
                { "ignore-words": ["TODO", "HACK"], "ignore-pattern": "STD\\w{2,3}\\b" },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "capitalized-comments",
                    ruleArguments: ["always"],
                    notices: [CheckTrailingLowercaseMessage, CapitalizedIgnoreMessage],
                },
                {
                    ruleName: "spaced-comment",
                    ruleArguments: [],
                },
            ],
        });
    });
});
