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
                    ruleSeverity: "off",
                },
                {
                    notices: [
                        `The TSLint optional config "allow-new" is the default ESLint behavior and will no longer be ignored.`,
                    ],
                    ruleName: "@typescript-eslint/no-unused-expressions",
                },
            ],
        });
    });

    test("conversion without allow-new argument", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: ["allow-fast-null-checks"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-expressions",
                    ruleSeverity: "off",
                },
                {
                    notices: [
                        `The TSLint optional config "allow-new" is the default ESLint behavior and will no longer be ignored.`,
                    ],
                    ruleArguments: [{ allowShortCircuit: true }],
                    ruleName: "@typescript-eslint/no-unused-expressions",
                },
            ],
        });
    });

    test("conversion with allow-tagged-template argument", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: ["allow-new", "allow-tagged-template"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-expressions",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ allowTaggedTemplates: true }],
                    ruleName: "@typescript-eslint/no-unused-expressions",
                },
            ],
        });
    });

    test("conversion with allow-fast-null-checks argument", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: ["allow-new", "allow-fast-null-checks"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-expressions",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ allowShortCircuit: true }],
                    ruleName: "@typescript-eslint/no-unused-expressions",
                },
            ],
        });
    });

    test("conversion with multiple arguments", () => {
        const result = convertNoUnusedExpression({
            ruleArguments: ["allow-new", "allow-tagged-template", "allow-fast-null-checks"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-expressions",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ allowTaggedTemplates: true, allowShortCircuit: true }],
                    ruleName: "@typescript-eslint/no-unused-expressions",
                },
            ],
        });
    });
});
