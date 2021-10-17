import { convertRxjsNoIndex } from "../rxjs-no-index";

describe(convertRxjsNoIndex, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIndex({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-index",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
