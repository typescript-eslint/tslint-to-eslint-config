import { convertNoEmptyNestedBlocks } from "../no-empty-nested-blocks";

describe(convertNoEmptyNestedBlocks, () => {
    test("conversion without arguments", () => {
        const result = convertNoEmptyNestedBlocks({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ allowEmptyCatch: true }],
                    ruleName: "no-empty",
                },
            ],
        });
    });
});
