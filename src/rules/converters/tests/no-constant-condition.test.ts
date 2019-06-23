import { convertNoConstantCondition } from "../no-constant-condition";

describe(convertNoConstantCondition, () => {
    test("conversion without arguments", () => {
        const result = convertNoConstantCondition({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-constant-condition",
                },
            ],
        });
    });
});
