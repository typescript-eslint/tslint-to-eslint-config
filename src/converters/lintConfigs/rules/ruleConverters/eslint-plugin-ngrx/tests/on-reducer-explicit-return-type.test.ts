import { convertOnReducerExplicitReturnType } from "../on-reducer-explicit-return-type";

describe(convertOnReducerExplicitReturnType, () => {
    test("conversion without arguments", () => {
        const result = convertOnReducerExplicitReturnType({
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
