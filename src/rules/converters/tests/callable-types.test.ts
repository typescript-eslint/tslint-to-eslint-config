import { convertCallableTypes } from "../callable-types";

describe(convertCallableTypes, () => {
    test("conversion without arguments", () => {
        const result = convertCallableTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/prefer-function-type",
                },
            ],
        });
    });
});
