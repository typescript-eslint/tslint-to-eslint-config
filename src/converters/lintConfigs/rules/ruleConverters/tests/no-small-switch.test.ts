import { describe, expect, test } from "@jest/globals";

import { convertNoSmallSwitch } from "../no-small-switch.js";

describe("convertNoSmallSwitch", () => {
    test("conversion without arguments", () => {
        const result = convertNoSmallSwitch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-small-switch",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
