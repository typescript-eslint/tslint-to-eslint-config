import { convertNoObjectLiteralTypeAssertion } from "../no-object-literal-type-assertion";

describe(convertNoObjectLiteralTypeAssertion, () => {
    test("conversion without arguments", () => {
        const result = convertNoObjectLiteralTypeAssertion({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-object-literal-type-assertion",
                },
            ],
        });
    });
});
