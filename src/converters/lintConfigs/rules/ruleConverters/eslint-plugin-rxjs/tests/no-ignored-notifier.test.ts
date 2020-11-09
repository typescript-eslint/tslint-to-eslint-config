import { convertNoIgnoredNotifier } from "../no-ignored-notifier";

describe(convertNoIgnoredNotifier, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredNotifier({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-notifier",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
