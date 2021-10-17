import { convertRxjsNoAsyncSubscribe } from "../rxjs-no-async-subscribe";

describe(convertRxjsNoAsyncSubscribe, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoAsyncSubscribe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-async-subscribe",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
