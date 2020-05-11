import { convertTemplateCyclomaticComplexity } from "../template-cyclomatic-complexity";

describe(convertTemplateCyclomaticComplexity, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateCyclomaticComplexity({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/cyclomatic-complexity",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
