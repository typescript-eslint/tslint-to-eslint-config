import { describe, expect, test } from "@jest/globals";

import { convertNoIrregularWhitespace } from "../no-irregular-whitespace";

describe("convertNoIrregularWhitespace", () => {
    test("conversion without arguments", () => {
        const result = convertNoIrregularWhitespace({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-irregular-whitespace",
                },
            ],
        });
    });
});
