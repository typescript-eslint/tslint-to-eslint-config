import { convertCommentFormat, CapitalizedIgnoreMessage } from "../comment-format";

describe(convertCommentFormat, () => {
    test("conversion without arguments", () => {
        const result = convertCommentFormat({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
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
                    ruleName: "spaced-comment",
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
                    ruleArguments: ["never"],
                    ruleName: "capitalized-comments",
                },
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
                },
            ],
        });
    });

    test("conversion with ignore-pattern argument", () => {
        const result = convertCommentFormat({
            ruleArguments: ["check-uppercase", { "ignore-pattern": "STD\\w{2,3}\\b" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [CapitalizedIgnoreMessage],
                    ruleArguments: ["always"],
                    ruleName: "capitalized-comments",
                },
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
                },
            ],
        });
    });

    test("conversion with ignore-pattern argument (no check-{lower,upper}case)", () => {
        const result = convertCommentFormat({
            ruleArguments: [{ "ignore-pattern": "STD\\w{2,3}\\b" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
                },
            ],
        });
    });

    test("conversion with empty ignore-words argument", () => {
        const result = convertCommentFormat({
            ruleArguments: ["check-uppercase", { "ignore-words": [] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "capitalized-comments",
                },
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
                },
            ],
        });
    });

    test("conversion with empty ignore-words argument (no check-{lower,upper}case)", () => {
        const result = convertCommentFormat({
            ruleArguments: [{ "ignore-words": [] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
                },
            ],
        });
    });

    test("conversion with ignore-words argument", () => {
        const result = convertCommentFormat({
            ruleArguments: ["check-uppercase", { "ignore-words": ["TODO", "HACK"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [CapitalizedIgnoreMessage],
                    ruleArguments: ["always"],
                    ruleName: "capitalized-comments",
                },
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
                },
            ],
        });
    });

    test("conversion with ignore-words argument (no check-{lower,upper}case)", () => {
        const result = convertCommentFormat({
            ruleArguments: [{ "ignore-words": ["TODO", "HACK"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "spaced-comment",
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
                    notices: [CapitalizedIgnoreMessage],
                    ruleArguments: ["always"],
                    ruleName: "capitalized-comments",
                },
                {
                    ruleName: "spaced-comment",
                },
            ],
        });
    });
});
