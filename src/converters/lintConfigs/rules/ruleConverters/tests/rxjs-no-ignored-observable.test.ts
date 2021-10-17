import { convertRxjsNoIgnoredObservable } from "../rxjs-no-ignored-observable";

describe(convertRxjsNoIgnoredObservable, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredObservable({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-observable",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
