import { convertPreferArrayLiteral } from "../prefer-array-literal";

describe(convertPreferArrayLiteral, () => {
    test("conversion without arguments", () => {
        const result = convertPreferArrayLiteral({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-array-constructor",
                },
            ],
        });
    });
});
