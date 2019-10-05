import { convertStrictBooleanExpressions } from "../strict-boolean-expressions";

describe(convertStrictBooleanExpressions, () => {
    test("conversion without arguments", () => {
        const result = convertNoFloatingPromises({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/strict-boolean-expressions",
                },
            ],
        });
    });
});
