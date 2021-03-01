import { convertTemplateConditionalComplexity } from "../template-conditional-complexity";

describe(convertTemplateConditionalComplexity, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateConditionalComplexity({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/conditional-complexity",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
