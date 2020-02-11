import { mergeRuleWithNoOptions } from "../rule-with-no-options";

describe(mergeRuleWithNoOptions, () => {
    test("neither options existing", () => {
        const result = mergeRuleWithNoOptions(undefined, undefined);

        expect(result).toEqual([]);
    });
});
