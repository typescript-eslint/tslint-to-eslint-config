import { describe, expect, test } from "@jest/globals";

import { convertNoRedundantParentheses } from "../no-redundant-parentheses";

describe("convertNoRedundantParentheses", () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantParentheses({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-extra-parens",
                },
            ],
        });
    });
});
