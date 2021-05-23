import { convertNoReturnTypeAny } from "../no-return-type-any";

describe(convertNoReturnTypeAny, () => {
    test("conversion without arguments", () => {
        const result = convertNoReturnTypeAny({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unsafe-return",
                },
            ],
        });
    });
});
