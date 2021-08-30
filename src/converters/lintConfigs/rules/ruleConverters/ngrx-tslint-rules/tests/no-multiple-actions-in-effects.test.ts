import { convertNoMultipleActionsInEffects } from "../no-multiple-actions-in-effects";

describe(convertNoMultipleActionsInEffects, () => {
    test("conversion without arguments", () => {
        const result = convertNoMultipleActionsInEffects({
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
