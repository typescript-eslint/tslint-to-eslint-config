import { describe, expect, test } from "@jest/globals";

import { convertSwitchDefault } from "../switch-default.js";

describe("convertSwitchDefault", () => {
    test("conversion without arguments", () => {
        const result = convertSwitchDefault({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "default-case",
                },
            ],
        });
    });
});
