import { convertNoTap } from "../no-tap";

describe(convertNoTap, () => {
    test("conversion without arguments", () => {
        const result = convertNoTap({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ tap: true }],
                    ruleName: "rxjs/ban-operators",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
