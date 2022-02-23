import { describe, expect, test } from "@jest/globals";

import { convertPreferOnPushComponentChangeDetection } from "../prefer-on-push-component-change-detection";

describe("convertPreferOnPushComponentChangeDetection", () => {
    test("conversion without arguments", () => {
        const result = convertPreferOnPushComponentChangeDetection({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/prefer-on-push-component-change-detection",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
