import { describe, expect, test } from "@jest/globals";

import { convertTypeofCompare } from "../typeof-compare";

describe("convertTypeofCompare", () => {
    test("conversion without arguments", () => {
        const result = convertTypeofCompare({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "valid-typeof",
                },
            ],
        });
    });
});
