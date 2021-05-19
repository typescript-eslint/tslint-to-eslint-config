import { convertNoDeleteExpression } from "../no-delete-expression";

describe(convertNoDeleteExpression, () => {
    test("conversion", () => {
        const result = convertNoDeleteExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-dynamic-delete",
                },
            ],
        });
    });
});
