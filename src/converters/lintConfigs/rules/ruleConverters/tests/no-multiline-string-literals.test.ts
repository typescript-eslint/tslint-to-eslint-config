import { describe, expect, test } from "@jest/globals";

import { convertNoMultilineStringLiterals } from "../no-multiline-string-literals.js";

describe("convertNoMultilineStringLiterals", () => {
    test("conversion without arguments", () => {
        const result = convertNoMultilineStringLiterals({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-multi-str",
                },
            ],
        });
    });
});
