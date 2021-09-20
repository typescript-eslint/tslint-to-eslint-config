import { convertDeepOperators } from "../deep-operators";

describe(convertDeepOperators, () => {
    test("conversion without arguments", () => {
        const result = convertDeepOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
