import { convertFunctionConstructor } from "../function-constructor";

describe(convertFunctionConstructor, () => {
    test("conversion without arguments", () => {
        const result = convertFunctionConstructor({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-new-func",
                },
            ],
        });
    });
});
