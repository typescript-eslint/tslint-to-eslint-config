import { convertAvoidDispatchingMultipleActionsSequentially } from "../avoid-dispatching-multiple-actions-sequentially";

describe(convertAvoidDispatchingMultipleActionsSequentially, () => {
    test("conversion without arguments", () => {
        const result = convertAvoidDispatchingMultipleActionsSequentially({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/avoid-dispatching-multiple-actions-sequentially",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
