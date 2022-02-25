import { describe, expect, test } from "@jest/globals";

import { convertNoUnconditionalJump } from "../no-unconditional-jump.js";

describe("convertNoUnconditionalJump", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnconditionalJump({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-one-iteration-loop",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
