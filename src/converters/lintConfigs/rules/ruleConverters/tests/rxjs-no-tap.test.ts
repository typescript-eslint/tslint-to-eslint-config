import { convertRxjsNoTap } from "../rxjs-no-tap";

describe(convertRxjsNoTap, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoTap({
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
