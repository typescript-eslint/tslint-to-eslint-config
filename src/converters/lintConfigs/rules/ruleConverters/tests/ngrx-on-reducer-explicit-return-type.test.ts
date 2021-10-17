import { convertNgrxOnReducerExplicitReturnType } from "../ngrx-on-reducer-explicit-return-type";

describe(convertNgrxOnReducerExplicitReturnType, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxOnReducerExplicitReturnType({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/on-function-explicit-return-type",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
