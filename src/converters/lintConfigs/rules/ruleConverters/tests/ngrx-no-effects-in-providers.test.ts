import { convertNgrxNoEffectsInProviders } from "../ngrx-no-effects-in-providers";

describe(convertNgrxNoEffectsInProviders, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoEffectsInProviders({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-effects-in-providers",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
