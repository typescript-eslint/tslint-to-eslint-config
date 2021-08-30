import { convertNoUnusedAdd } from "../no-unused-add";

describe(convertNoUnusedAdd, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnusedAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
