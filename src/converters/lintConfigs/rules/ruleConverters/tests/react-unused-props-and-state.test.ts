import { convertReactUnusedPropsAndState } from "../react-unused-props-and-state";

describe(convertReactUnusedPropsAndState, () => {
    test("conversion without arguments", () => {
        const result = convertReactUnusedPropsAndState({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
