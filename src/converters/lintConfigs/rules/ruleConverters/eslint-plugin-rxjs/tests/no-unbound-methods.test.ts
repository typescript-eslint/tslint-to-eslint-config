import { convertNoUnboundMethods } from "../no-unbound-methods";

describe(convertNoUnboundMethods, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnboundMethods({
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
