import { describe, expect, test } from "@jest/globals";

import { convertNoFloatingPromises } from "../no-floating-promises";

describe("convertNoFloatingPromises", () => {
    test("conversion without arguments", () => {
        const result = convertNoFloatingPromises({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-floating-promises",
                },
            ],
        });
    });
});
