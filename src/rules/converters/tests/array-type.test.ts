import { convertArrayType } from "../array-type";

describe(convertArrayType, () => {
    test("conversion without arguments", () => {
        const result = convertArrayType({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/array-type",
                },
            ],
        });
    });
});
