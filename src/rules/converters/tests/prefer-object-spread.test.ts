import { convertPreferObjectSpread } from "../prefer-object-spread";

describe(convertPreferObjectSpread, () => {
    test("conversion without arguments", () => {
        const result = convertPreferObjectSpread({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-object-spread",
                },
            ],
        });
    });
});
