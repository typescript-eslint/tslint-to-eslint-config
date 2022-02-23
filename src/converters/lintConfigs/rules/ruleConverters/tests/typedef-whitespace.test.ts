import { describe, expect, test } from "@jest/globals";

import { convertTypedefWhitespace } from "../typedef-whitespace";

describe("convertTypedefWhitespace", () => {
    test("conversion without arguments", () => {
        const result = convertTypedefWhitespace({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/type-annotation-spacing",
                },
            ],
        });
    });
});
