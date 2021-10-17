import { convertRxjsNoIgnoredSubscribe } from "../rxjs-no-ignored-subscribe";

describe(convertRxjsNoIgnoredSubscribe, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredSubscribe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-subscribe",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
