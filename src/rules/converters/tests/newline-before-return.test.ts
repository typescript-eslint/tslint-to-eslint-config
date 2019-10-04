import { convertNewlineBeforeReturn } from "../newline-before-return";

describe(convertNewlineBeforeReturn, () => {
    test("conversion without arguments", () => {
        const result = convertNewlineBeforeReturn({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "padding-line-between-statements",
                    ruleArguments: [
                        "error",
                        {
                            blankLine: "always",
                            next: "return",
                            prev: "*",
                        },
                    ],
                },
            ],
        });
    });
});
