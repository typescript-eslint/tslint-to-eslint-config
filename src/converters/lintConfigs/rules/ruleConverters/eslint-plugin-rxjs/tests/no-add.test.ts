import { convertNoAdd } from "../no-add";

describe(convertNoAdd, () => {
    test("conversion without arguments", () => {
        const result = convertNoAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
