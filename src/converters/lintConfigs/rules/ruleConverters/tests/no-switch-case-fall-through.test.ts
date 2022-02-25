import { describe, expect, test } from "@jest/globals";

import { convertNoSwitchCaseFallThrough } from "../no-switch-case-fall-through.js";

describe("convertNoSwitchCaseFallThrough", () => {
    test("conversion without arguments", () => {
        const result = convertNoSwitchCaseFallThrough({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-fallthrough",
                },
            ],
        });
    });
});
