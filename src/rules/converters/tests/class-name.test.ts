import { convertClassName } from "../class-name";

describe(convertClassName, () => {
    test("conversion without arguments", () => {
        const result = convertClassName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/class-name-casing",
                },
            ],
        });
    });
});
