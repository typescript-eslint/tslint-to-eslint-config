import { describe, expect, test } from "@jest/globals";

import { convertMaxSwitchCases } from "../max-switch-cases.js";

describe("convertMaxSwitchCases", () => {
    test("conversion without arguments", () => {
        const result = convertMaxSwitchCases({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/max-switch-cases",
                },
            ],
            plugins: ["sonarjs"],
        });
    });

    test("conversion with maximum argument", () => {
        const result = convertMaxSwitchCases({
            ruleArguments: [10],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [10],
                    ruleName: "sonarjs/max-switch-cases",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
