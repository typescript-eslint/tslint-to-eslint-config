import { describe, expect, test } from "@jest/globals";

import { convertNoBannedTerms } from "../no-banned-terms";

describe("convertNoBannedTerms", () => {
    test("conversion without arguments", () => {
        const result = convertNoBannedTerms({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-caller",
                },
                {
                    ruleName: "no-eval",
                },
            ],
        });
    });
});
