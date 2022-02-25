import { describe, expect, test } from "@jest/globals";

import { convertBanCommaOperator } from "../ban-comma-operator.js";

describe("convertBanCommaOperator", () => {
    test("conversion without arguments", () => {
        const result = convertBanCommaOperator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-sequences",
                },
            ],
        });
    });
});
