import { convertNoReducerInKeyNames } from "../no-reducer-in-key-names";

describe(convertNoReducerInKeyNames, () => {
    test("conversion without arguments", () => {
        const result = convertNoReducerInKeyNames({
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
