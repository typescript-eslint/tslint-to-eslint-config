import { describe, expect, test } from "@jest/globals";

import { convertNewlinePerChainedCall } from "../newline-per-chained-call.js";

describe("convertNewlinePerChainedCall", () => {
    test("conversion without arguments", () => {
        const result = convertNewlinePerChainedCall({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "newline-per-chained-call",
                },
            ],
        });
    });
});
