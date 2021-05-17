import { convertPreferArrayLiteral } from "../prefer-array-literal";

describe(convertPreferArrayLiteral, () => {
    test("conversion without arguments", () => {
        const result = convertPreferArrayLiteral({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-array-constructor",
                    ruleSeverity: "off"
                },
                {
                    ruleName: "@typescript-eslint/no-array-constructor",
                },
            ],
        });
    });
});
