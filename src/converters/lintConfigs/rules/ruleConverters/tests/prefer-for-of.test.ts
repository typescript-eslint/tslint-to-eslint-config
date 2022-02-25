import { describe, expect, test } from "@jest/globals";

import { convertPreferForOf } from "../prefer-for-of.js";

describe("convertPreferForOf", () => {
    test("conversion without arguments", () => {
        const result = convertPreferForOf({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/prefer-for-of",
                },
            ],
        });
    });
});
