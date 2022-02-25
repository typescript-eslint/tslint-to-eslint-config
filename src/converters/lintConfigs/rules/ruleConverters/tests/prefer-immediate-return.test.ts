import { describe, expect, test } from "@jest/globals";

import { convertPreferImmediateReturn } from "../prefer-immediate-return.js";

describe("convertPreferImmediateReturn", () => {
    test("conversion without arguments", () => {
        const result = convertPreferImmediateReturn({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/prefer-immediate-return",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
