import { convertTypeLiteralDelimiter } from "../type-literal-delimiter";

describe(convertTypeLiteralDelimiter, () => {
    test("conversion without arguments", () => {
        const result = convertTypeLiteralDelimiter({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/member-delimiter-style",
                },
            ],
        });
    });
});
