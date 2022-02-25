import { describe, expect, test } from "@jest/globals";

import { convertNoExplicitAny } from "../no-explicit-any.js";

describe("convertNoExplicitAny", () => {
    test("conversion without arguments", () => {
        const result = convertNoExplicitAny({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-explicit-any",
                },
            ],
        });
    });
});
