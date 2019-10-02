import { convertQuotemark } from "../quotemark";

describe(convertQuotemark, () => {
    test("conversion without arguments", () => {
        const result = convertQuotemark({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/quotes",
                    ruleArguments: [],
                    notices: [],
                },
            ],
        });
    });

    test("conversion with an arguments", () => {
        const result = convertQuotemark({
            ruleArguments: ["double"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/quotes",
                    ruleArguments: ["double"],
                    notices: [],
                },
            ],
        });
    });

    test("conversion with an avoid-escape argument", () => {
        const result = convertQuotemark({
            ruleArguments: ["avoid-escape"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/quotes",
                    ruleArguments: [{ avoidEscape: true }],
                    notices: [],
                },
            ],
        });
    });

    test("conversion with multiple arguments", () => {
        const result = convertQuotemark({
            ruleArguments: ["single", "avoid-template"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/quotes",
                    ruleArguments: ["single"],
                    notices: ['Option "avoid-template" is not supported by ESLint.'],
                },
            ],
        });
    });

    test("conversion with unsupported arguments", () => {
        const result = convertQuotemark({
            ruleArguments: ["jsx-single", "jsx-double", "avoid-template"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/quotes",
                    ruleArguments: [],
                    notices: [
                        'Option "jsx-single" is not supported by ESLint.',
                        'Option "jsx-double" is not supported by ESLint.',
                        'Option "avoid-template" is not supported by ESLint.',
                    ],
                },
            ],
        });
    });
});
