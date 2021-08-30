import { convertNoAttributeDecorator } from "../no-attribute-decorator";

describe(convertNoAttributeDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertNoAttributeDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-attribute-decorator",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
