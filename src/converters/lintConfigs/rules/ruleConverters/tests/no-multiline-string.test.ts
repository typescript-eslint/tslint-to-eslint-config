import { describe, expect, test } from "@jest/globals";

import { convertNoMultilineString } from "../no-multiline-string.js";

describe("convertNoMultilineString", () => {
    test("conversion without arguments", () => {
        const result = convertNoMultilineString({
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
