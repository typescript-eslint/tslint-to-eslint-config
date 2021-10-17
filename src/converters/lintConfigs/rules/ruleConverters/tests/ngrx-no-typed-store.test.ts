import { convertNgrxNoTypedStore } from "../ngrx-no-typed-store";

describe(convertNgrxNoTypedStore, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoTypedStore({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-typed-global-store",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
