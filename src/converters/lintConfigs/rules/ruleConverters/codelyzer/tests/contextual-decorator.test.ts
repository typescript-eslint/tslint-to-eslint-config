import { convertContextualDecorator } from "../contextual-decorator";

describe(convertContextualDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertContextualDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/contextual-decorator",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
