import { convertNoUnusedExpression } from "../no-unused-expression";

describe(convertNoUnusedExpression, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-expressions",
                },
            ],
        });
    });

    test("conversion with allow-tagged-template argument", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: ["allow-tagged-template"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ allowTaggedTemplates: true }],
                    ruleName: "no-unused-expressions",
                },
            ],
        });
    });

    test("conversion with argument not equals allow-tagged-template", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: ["allow-fast-null-checks"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-expressions",
                    notices: ["ESLint does not support optional config allow-fast-null-checks."],
                },
            ],
        });
    });
});
