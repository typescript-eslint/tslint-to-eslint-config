import { convertBanObservables } from "../ban-observables";

describe(convertBanObservables, () => {
    test("conversion without arguments", () => {
        const result = convertBanObservables({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-observables",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with options", () => {
        const result = convertBanObservables({
            ruleArguments: [{ merge: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-observables",
                    ruleArguments: [{ merge: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
