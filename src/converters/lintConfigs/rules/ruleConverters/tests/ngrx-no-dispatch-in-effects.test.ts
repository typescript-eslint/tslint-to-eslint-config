import { convertNgrxNoDispatchInEffects } from "../ngrx-no-dispatch-in-effects";

describe(convertNgrxNoDispatchInEffects, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoDispatchInEffects({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-dispatch-in-effects",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
