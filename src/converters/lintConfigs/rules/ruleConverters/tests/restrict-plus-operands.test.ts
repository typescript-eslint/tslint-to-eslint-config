import { describe, expect, test } from "@jest/globals";

import { convertRestrictPlusOperands } from "../restrict-plus-operands";

describe("convertRestrictPlusOperands", () => {
    test("conversion without arguments", () => {
        const result = convertRestrictPlusOperands({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/restrict-plus-operands",
                },
            ],
        });
    });
});
