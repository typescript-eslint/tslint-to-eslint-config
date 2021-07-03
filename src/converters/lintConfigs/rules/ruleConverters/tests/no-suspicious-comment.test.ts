import { convertNoSuspiciousComment } from "../no-suspicious-comment";

describe(convertNoSuspiciousComment, () => {
    test("conversion without arguments", () => {
        const result = convertNoSuspiciousComment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            location: "anywhere",
                            terms: ["BUG", "HACK", "FIXME", "LATER", "LATER2", "TODO"],
                        },
                    ],
                    ruleName: "no-warning-comments",
                },
            ],
        });
    });

    test("conversion with terms argument", () => {
        const result = convertNoSuspiciousComment({
            ruleArguments: ["https://github.com/my-org/my-project/(.*)"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint's no-warning-comments does not allow an array of terms to match.",
                    ],
                    ruleArguments: [
                        {
                            location: "anywhere",
                            terms: ["BUG", "HACK", "FIXME", "LATER", "LATER2", "TODO"],
                        },
                    ],
                    ruleName: "no-warning-comments",
                },
            ],
        });
    });
});
