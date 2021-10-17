import { convertRxjsNoIgnoredNotifier } from "../rxjs-no-ignored-notifier";

describe(convertRxjsNoIgnoredNotifier, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredNotifier({
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
