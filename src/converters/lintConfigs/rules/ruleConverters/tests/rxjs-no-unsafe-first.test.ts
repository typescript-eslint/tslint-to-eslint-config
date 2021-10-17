import { convertRxjsNoUnsafeFirst } from "../rxjs-no-unsafe-first";

describe(convertRxjsNoUnsafeFirst, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeFirst({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-first",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
