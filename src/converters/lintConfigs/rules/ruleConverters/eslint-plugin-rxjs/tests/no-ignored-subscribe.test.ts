import { convertNoIgnoredSubscribe } from "../no-ignored-subscribe";

describe(convertNoIgnoredSubscribe, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredSubscribe({
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
