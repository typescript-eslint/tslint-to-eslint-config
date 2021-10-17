import { convertNgrxNoMultipleActionsInEffects } from "../ngrx-no-multiple-actions-in-effects";

describe(convertNgrxNoMultipleActionsInEffects, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoMultipleActionsInEffects({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-multiple-actions-in-effects",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
