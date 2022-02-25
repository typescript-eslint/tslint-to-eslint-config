import { describe, expect, test } from "@jest/globals";

import { convertNoUnnecessaryQualifier } from "../no-unnecessary-qualifier.js";

describe("convertNoUnnecessaryQualifier", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryQualifier({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unnecessary-qualifier",
                },
            ],
        });
    });
});
