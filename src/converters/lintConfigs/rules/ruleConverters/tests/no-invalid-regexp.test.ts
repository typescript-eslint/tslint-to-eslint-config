import { describe, expect, test } from "@jest/globals";

import { convertNoInvalidRegexp } from "../no-invalid-regexp.js";

describe("convertNoInvalidRegexp", () => {
    test("conversion without arguments", () => {
        const result = convertNoInvalidRegexp({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-invalid-regexp",
                },
            ],
        });
    });
});
