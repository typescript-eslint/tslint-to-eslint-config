import { convertAdd } from "../add";

describe(convertAdd, () => {
    test("conversion without arguments", () => {
        const result = convertAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
