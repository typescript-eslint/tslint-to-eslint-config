import { convertClassMethodNewlines } from "./class-method-newlines";

describe(convertClassMethodNewlines, () => {
    test("conversion without arguments", () => {
        const result = convertClassMethodNewlines({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "lines-between-class-members",
                    ruleArguments: [
                        "error",
                        {
                            enforce: [
                                {
                                    blankLine: "always",
                                    prev: "method",
                                    next: "method",
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    });
});
