import { convertBinaryExpressionOperandOrder } from "../binary-expression-operand-order";

describe(convertBinaryExpressionOperandOrder, () => {
    test("conversion without arguments", () => {
        const result = convertBinaryExpressionOperandOrder({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "yoda",
                },
            ],
        });
    });
});
