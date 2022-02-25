import { describe, expect, test } from "@jest/globals";

import { convertNoEmptyDestructuring } from "../no-empty-destructuring.js";

describe("convertNoEmptyDestructuring", () => {
    test("conversion without arguments", () => {
        const result = convertNoEmptyDestructuring({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-empty-pattern",
                },
            ],
        });
    });
});
