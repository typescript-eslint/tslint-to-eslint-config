import { convertRxjsNoDeepOperators } from "../rxjs-no-deep-operators";

describe(convertRxjsNoDeepOperators, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoDeepOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
