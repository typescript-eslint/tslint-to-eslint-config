import { convertSpaceBeforeFunctionParen } from "../space-before-function-paren";

describe(convertSpaceBeforeFunctionParen, () => {
    test("conversion without arguments", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: ["anonymous"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["anonymous"],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test("conversion with all existing arguments", () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: ["anonymous", "named", "asyncArrow", "method", "constructor"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        'Option "constructor" is not supported by ESLint.',
                        'Option "method" is not supported by ESLint.',
                    ],
                    ruleArguments: ["anonymous", "named", "asyncArrow"],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });

    test('conversion with not supported options ["method", "constructor"]', () => {
        const result = convertSpaceBeforeFunctionParen({
            ruleArguments: ["method", "constructor"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        'Option "constructor" is not supported by ESLint.',
                        'Option "method" is not supported by ESLint.',
                    ],
                    ruleArguments: [],
                    ruleName: "space-before-function-paren",
                },
            ],
        });
    });
});
