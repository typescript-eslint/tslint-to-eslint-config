import { convertNoWholesale } from "../no-wholesale";

describe(convertNoWholesale, () => {
    test("conversion without arguments", () => {
        const result = convertNoWholesale({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
