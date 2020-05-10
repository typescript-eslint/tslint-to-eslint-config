import { convertNoUnusedCss } from "../no-unused-css";

describe(convertNoUnusedCss, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnusedCss({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-unused-css",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
