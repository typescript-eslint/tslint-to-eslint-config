import { describe, expect, test } from "@jest/globals";

import { convertBinaryExpressionOperandOrder } from "../binary-expression-operand-order.js";

describe("convertBinaryExpressionOperandOrder", () => {
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
