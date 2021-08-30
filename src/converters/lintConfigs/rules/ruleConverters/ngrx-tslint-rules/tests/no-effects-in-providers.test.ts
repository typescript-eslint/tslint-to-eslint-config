import { convertNoEffectsInProviders } from "../no-effects-in-providers";

describe(convertNoEffectsInProviders, () => {
    test("conversion without arguments", () => {
        const result = convertNoEffectsInProviders({
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
