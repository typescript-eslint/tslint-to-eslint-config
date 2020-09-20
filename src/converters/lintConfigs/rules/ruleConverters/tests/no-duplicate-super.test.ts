import { convertNoDuplicateSuper } from "../no-duplicate-super";

describe(convertNoDuplicateSuper, () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateSuper({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "constructor-super",
                },
            ],
        });
    });
});
