import { convertNoInferrableTypes } from "../no-inferrable-types";

describe(convertNoInferrableTypes, () => {
    test("conversion without arguments", () => {
        const result = convertNoInferrableTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-inferrable-types",
                },
            ],
        });
    });
});
