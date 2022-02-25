import { describe, expect, test } from "@jest/globals";

import { convertNoRegexSpaces } from "../no-regex-spaces.js";

describe("convertNoRegexSpaces", () => {
    test("conversion without arguments", () => {
        const result = convertNoRegexSpaces({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-regex-spaces",
                },
            ],
        });
    });
});
