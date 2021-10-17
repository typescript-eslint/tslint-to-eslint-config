import { convertRxjsNoSubclass } from "../rxjs-no-subclass";

describe(convertRxjsNoSubclass, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoSubclass({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-subclass",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
