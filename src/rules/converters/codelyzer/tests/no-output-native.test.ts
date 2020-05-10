import { convertNoOutputNative } from "../no-output-native";

describe(convertNoOutputNative, () => {
    test("conversion without arguments", () => {
        const result = convertNoOutputNative({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-output-native",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
