import { convertNoOperator } from "../no-operator";

describe(convertNoOperator, () => {
    test("conversion without arguments", () => {
        const result = convertNoOperator({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
