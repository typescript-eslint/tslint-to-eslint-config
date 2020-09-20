import { convertNoUnboundMethod } from "../no-unbound-method";

describe(convertNoUnboundMethod, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnboundMethod({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/unbound-method",
                },
            ],
        });
    });
});
