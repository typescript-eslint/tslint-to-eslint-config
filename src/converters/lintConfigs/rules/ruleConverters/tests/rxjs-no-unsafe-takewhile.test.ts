import { convertRxjsNoUnsafeTakewhile } from "../rxjs-no-unsafe-takewhile";

describe(convertRxjsNoUnsafeTakewhile, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeTakewhile({
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
