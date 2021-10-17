import { convertRxjsNoInternal } from "../rxjs-no-internal";

describe(convertRxjsNoInternal, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoInternal({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-internal",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
