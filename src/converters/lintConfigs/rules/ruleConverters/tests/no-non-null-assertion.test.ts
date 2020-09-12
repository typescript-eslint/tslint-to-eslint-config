import { convertNoNonNullAssertion } from "../no-non-null-assertion";

describe(convertNoNonNullAssertion, () => {
    test("conversion without arguments", () => {
        const result = convertNoNonNullAssertion({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-non-null-assertion",
                },
            ],
        });
    });
});
