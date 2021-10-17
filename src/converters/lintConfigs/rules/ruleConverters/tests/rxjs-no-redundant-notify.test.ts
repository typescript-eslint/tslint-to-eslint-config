import { convertRxjsNoRedundantNotify } from "../rxjs-no-redundant-notify";

describe(convertRxjsNoRedundantNotify, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoRedundantNotify({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-redundant-notify",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
