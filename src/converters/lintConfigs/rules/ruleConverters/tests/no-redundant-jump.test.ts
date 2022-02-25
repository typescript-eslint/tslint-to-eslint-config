import { describe, expect, test } from "@jest/globals";

import { convertNoRedundantJump } from "../no-redundant-jump.js";

describe("convertNoRedundantJump", () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantJump({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-redundant-jump",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
