import { convertIndent } from "../indent";

describe(convertIndent, () => {
    test("conversion without arguments", () => {
        const result = convertIndent({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/indent",
                },
            ],
        });
    });
});
