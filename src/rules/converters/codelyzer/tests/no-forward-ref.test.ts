import { convertNoForwardRef } from "../no-forward-ref";

describe(convertNoForwardRef, () => {
    test("conversion without arguments", () => {
        const result = convertNoForwardRef({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-forward-ref",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
