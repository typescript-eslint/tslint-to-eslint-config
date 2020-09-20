import { convertNoSparseArrays } from "../no-sparse-arrays";

describe(convertNoSparseArrays, () => {
    test("conversion without arguments", () => {
        const result = convertNoSparseArrays({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-sparse-arrays",
                },
            ],
        });
    });
});
