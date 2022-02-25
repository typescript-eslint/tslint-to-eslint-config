import { describe, expect, test } from "@jest/globals";

import { convertNoLifecycleCall } from "../no-lifecycle-call.js";

describe("convertNoLifecycleCall", () => {
    test("conversion without arguments", () => {
        const result = convertNoLifecycleCall({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-lifecycle-call",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
