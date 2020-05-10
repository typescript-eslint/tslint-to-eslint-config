import { convertImportDestructuringSpacing } from "../import-destructuring-spacing";

describe(convertImportDestructuringSpacing, () => {
    test("conversion without arguments", () => {
        const result = convertImportDestructuringSpacing({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/import-destructuring-spacing",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
