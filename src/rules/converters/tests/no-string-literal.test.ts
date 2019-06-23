import { convertNoStringLiteral } from "../no-string-literal";

describe(convertNoStringLiteral, () => {
    test("conversion without arguments", () => {
        const result = convertNoStringLiteral({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "dot-notation",
                },
            ],
        });
    });
});
