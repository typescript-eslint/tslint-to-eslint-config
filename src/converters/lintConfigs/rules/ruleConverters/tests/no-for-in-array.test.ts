import { describe, expect, test } from "@jest/globals";

import { convertNoForInArray } from "../no-for-in-array.js";

describe("convertNoForInArray", () => {
    test("conversion without arguments", () => {
        const result = convertNoForInArray({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-for-in-array",
                },
            ],
        });
    });
});
