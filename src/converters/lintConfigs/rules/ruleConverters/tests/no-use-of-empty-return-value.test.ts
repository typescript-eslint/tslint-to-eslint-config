import { convertNoUseOfEmptyReturnValue } from "../no-use-of-empty-return-value";

describe(convertNoUseOfEmptyReturnValue, () => {
    test("conversion without arguments", () => {
        const result = convertNoUseOfEmptyReturnValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-use-of-empty-return-value",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
