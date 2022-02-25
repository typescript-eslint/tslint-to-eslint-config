import { describe, expect, test } from "@jest/globals";

import { convertRadix } from "../radix.js";

describe("convertRadix", () => {
    test("conversion without arguments", () => {
        const result = convertRadix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "radix",
                },
            ],
        });
    });
});
