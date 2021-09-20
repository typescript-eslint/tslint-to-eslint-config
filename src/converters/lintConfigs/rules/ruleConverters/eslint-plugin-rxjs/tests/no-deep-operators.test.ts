import { convertNoDeepOperators } from "../no-deep-operators";

describe(convertNoDeepOperators, () => {
    test("conversion without arguments", () => {
        const result = convertNoDeepOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
