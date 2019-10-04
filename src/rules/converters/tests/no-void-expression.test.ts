import { convertNoVoidExpression } from "../no-void-expression";

describe(convertNoVoidExpression, () => {
    test("conversion without arguments", () => {
        const result = convertNoVoidExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-void",
                },
            ],
        });
    });

    test("conversion with ignore-arrow-function-shorthand argument", () => {
        const result = convertNoVoidExpression({
            ruleArguments: ["ignore-arrow-function-shorthand"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint does not support ignoring arrow function shorthand."],
                    ruleName: "no-void",
                },
            ],
        });
    });
});
