import { convertRxjsNoUnboundMethods } from "../rxjs-no-unbound-methods";

describe(convertRxjsNoUnboundMethods, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnboundMethods({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unbound-methods",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
