import { convertNoTypedStore } from "../no-typed-store";

describe(convertNoTypedStore, () => {
    test("conversion without arguments", () => {
        const result = convertNoTypedStore({
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
