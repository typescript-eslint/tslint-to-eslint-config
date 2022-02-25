import { describe, expect, test } from "@jest/globals";

import { convertPreferObjectSpread } from "../prefer-object-spread.js";

describe("convertPreferObjectSpread", () => {
    test("conversion without arguments", () => {
        const result = convertPreferObjectSpread({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-object-spread",
                },
            ],
        });
    });
});
