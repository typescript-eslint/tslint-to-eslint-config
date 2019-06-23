import { convertNoRequireImports } from "../no-require-imports";

describe(convertNoRequireImports, () => {
    test("conversion without arguments", () => {
        const result = convertNoRequireImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-require-imports",
                },
            ],
        });
    });
});
