import { convertNoIgnoredObservable } from "../no-ignored-observable";

describe(convertNoIgnoredObservable, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredObservable({
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
