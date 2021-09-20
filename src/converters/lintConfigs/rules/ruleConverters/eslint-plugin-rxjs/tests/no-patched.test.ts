import { convertNoPatched } from "../no-patched";

describe(convertNoPatched, () => {
    test("conversion without arguments", () => {
        const result = convertNoPatched({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
