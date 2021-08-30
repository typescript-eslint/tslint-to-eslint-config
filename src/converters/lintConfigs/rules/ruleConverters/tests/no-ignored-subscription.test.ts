import { convertNoIgnoredSubscription } from "../no-ignored-subscription";

describe(convertNoIgnoredSubscription, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredSubscription({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-subscription",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
