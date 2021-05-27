import { convertQuotemark } from "../quotemark";

describe(convertQuotemark, () => {
    test("conversion without arguments", () => {
        const result = convertQuotemark({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "quotes",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/quotes",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertQuotemark({
            ruleArguments: ["double"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "quotes",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: ["double"],
                    ruleName: "@typescript-eslint/quotes",
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
                    ruleName: "quotes",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ avoidEscape: true }],
                    ruleName: "@typescript-eslint/quotes",
                },
            ],
        });
    });

    test("conversion with arguments", () => {
        const result = convertQuotemark({
            ruleArguments: ["single", "avoid-template"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "quotes",
                    ruleSeverity: "off",
                },
                {
                    notices: ['Option "avoid-template" is not supported by ESLint.'],
                    ruleArguments: ["single"],
                    ruleName: "@typescript-eslint/quotes",
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
                    ruleName: "quotes",
                    ruleSeverity: "off",
                },
                {
                    notices: [
                        'Option "jsx-single" is not supported by ESLint.',
                        'Option "jsx-double" is not supported by ESLint.',
                        'Option "avoid-template" is not supported by ESLint.',
                    ],
                    ruleName: "@typescript-eslint/quotes",
                },
            ],
        });
    });
});
