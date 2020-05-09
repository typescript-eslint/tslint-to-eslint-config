import { convertUsePipeDecorator } from "../use-pipe-decorator";

describe(convertUsePipeDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertUsePipeDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/use-pipe-decorator",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
