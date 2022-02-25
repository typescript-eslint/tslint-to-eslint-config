import { describe, expect, test } from "@jest/globals";

import { convertPossibleTimingAttack } from "../possible-timing-attack.js";

describe("convertPossibleTimingAttack", () => {
    test("conversion without arguments", () => {
        const result = convertPossibleTimingAttack({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-security"],
            rules: [
                {
                    ruleName: "security/detect-possible-timing-attacks",
                },
            ],
        });
    });
});
