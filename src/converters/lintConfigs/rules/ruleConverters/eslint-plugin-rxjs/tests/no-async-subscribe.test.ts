import { convertNoAsyncSubscribe } from "../no-async-subscribe";

describe(convertNoAsyncSubscribe, () => {
    test("conversion without arguments", () => {
        const result = convertNoAsyncSubscribe({
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
