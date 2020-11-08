import { convertNoIgnoredTakeWhileValue } from "../no-ignored-takewhile-value";

describe(convertNoIgnoredTakeWhileValue, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredTakeWhileValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-takewhile-value",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
