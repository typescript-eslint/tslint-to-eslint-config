import { convertRxjsNoCompat } from "../rxjs-no-compat";

describe(convertRxjsNoCompat, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoCompat({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-compat",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
