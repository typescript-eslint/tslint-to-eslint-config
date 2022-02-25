import { describe, expect, test } from "@jest/globals";

import { convertNoUnboundMethod } from "../no-unbound-method.js";

describe("convertNoUnboundMethod", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnboundMethod({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/unbound-method",
                },
            ],
        });
    });
});
