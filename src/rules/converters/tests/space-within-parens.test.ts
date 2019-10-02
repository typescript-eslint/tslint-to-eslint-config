import { convertSpaceWithinParens } from "../space-within-parens";

describe(convertSpaceWithinParens, () => {
    test("conversion without arguments", () => {
        const result = convertSpaceWithinParens({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/space-within-parens",
                },
            ],
        });
    });

    test("conversion with min spaces arguement", () => {
        const result = convertSpaceWithinParens({
            ruleArguments: [5],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [5],
                    ruleName: "@typescript-eslint/space-within-parens",
                },
            ],
        });
    });
});
