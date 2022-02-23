import { describe, expect, test } from "@jest/globals";

import { convertPreferSwitch } from "../prefer-switch";

describe("convertPreferSwitch", () => {
    test("conversion without arguments", () => {
        const result = convertPreferSwitch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "unicorn/prefer-switch",
                },
            ],
            plugins: ["eslint-plugin-unicorn"],
        });
    });

    test("conversion with 'min-cases' argument", () => {
        const result = convertPreferSwitch({
            ruleArguments: [{ "min-cases": 4 }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ minimumCases: 4 }],
                    ruleName: "unicorn/prefer-switch",
                },
            ],
            plugins: ["eslint-plugin-unicorn"],
        });
    });
});
