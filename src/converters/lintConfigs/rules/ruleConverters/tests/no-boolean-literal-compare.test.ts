import { describe, expect, test } from "@jest/globals";

import { convertNoBooleanLiteralCompare } from "../no-boolean-literal-compare.js";

describe("convertNoBooleanLiteralCompare", () => {
    test("conversion without arguments", () => {
        const result = convertNoBooleanLiteralCompare({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unnecessary-boolean-literal-compare",
                },
            ],
        });
    });
});
