import { describe, expect, test } from "@jest/globals";

import { convertNoMisusedNew } from "../no-misused-new.js";

describe("convertNoMisusedNew", () => {
    test("conversion without arguments", () => {
        const result = convertNoMisusedNew({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-misused-new",
                },
            ],
        });
    });
});
