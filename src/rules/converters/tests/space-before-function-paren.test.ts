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
});
