import { convertNgrxNoReducerInKeyNames } from "../ngrx-no-reducer-in-key-names";

describe(convertNgrxNoReducerInKeyNames, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoReducerInKeyNames({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-reducer-in-key-names",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
