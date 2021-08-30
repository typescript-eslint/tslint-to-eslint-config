import { convertNoDispatchInEffects } from "../no-dispatch-in-effects";

describe(convertNoDispatchInEffects, () => {
    test("conversion without arguments", () => {
        const result = convertNoDispatchInEffects({
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
