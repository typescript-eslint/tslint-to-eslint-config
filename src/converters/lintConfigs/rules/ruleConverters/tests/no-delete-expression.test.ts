import { describe, expect, test } from "@jest/globals";

import { convertNoDeleteExpression } from "../no-delete-expression.js";

describe("convertNoDeleteExpression", () => {
    test("conversion", () => {
        const result = convertNoDeleteExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-dynamic-delete",
                },
            ],
        });
    });
});
