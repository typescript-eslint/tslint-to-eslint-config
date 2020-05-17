import { convertTemplateNoCallExpression } from "../template-no-call-expression";

describe(convertTemplateNoCallExpression, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateNoCallExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/no-call-expression",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
