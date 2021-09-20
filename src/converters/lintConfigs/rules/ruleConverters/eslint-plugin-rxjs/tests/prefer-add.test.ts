import { convertPreferAdd } from "../prefer-add";

describe(convertPreferAdd, () => {
    test("conversion without arguments", () => {
        const result = convertPreferAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
