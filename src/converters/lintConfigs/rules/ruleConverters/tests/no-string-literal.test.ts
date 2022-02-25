import { describe, expect, test } from "@jest/globals";

import { convertNoStringLiteral } from "../no-string-literal.js";

describe("convertNoStringLiteral", () => {
    test("conversion without arguments", () => {
        const result = convertNoStringLiteral({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "dot-notation",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/dot-notation",
                },
            ],
        });
    });
});
