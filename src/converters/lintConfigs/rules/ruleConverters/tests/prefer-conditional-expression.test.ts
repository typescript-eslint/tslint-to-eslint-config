import { convertPreferConditionalExpression, PREFER_CONDITIONAL_EXPRESSION_NOTICE } from "../prefer-conditional-expression";

describe(convertPreferConditionalExpression, () => {
    test("conversion without arguments", () => {
        const result = convertPreferConditionalExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "unicorn/prefer-ternary",
                },
            ],
            plugins: ["eslint-plugin-unicorn"],
        });
    });

    test("conversion with 'check-else-if' argument", () => {
        const result = convertPreferConditionalExpression({
            ruleArguments: ['check-else-if'],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [PREFER_CONDITIONAL_EXPRESSION_NOTICE],
                    ruleName: "unicorn/prefer-ternary",
                },
            ],
            plugins: ["eslint-plugin-unicorn"],
        });
    });
});