import { convertNoExtraSemicolon } from "../no-extra-semicolon";

describe(convertNoExtraSemicolon, () => {
    test("conversion without arguments", () => {
        const result = convertNoExtraSemicolon({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-extra-semi",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/no-extra-semi",
                },
            ],
        });
    });
});
