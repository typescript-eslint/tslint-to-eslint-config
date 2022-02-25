import { describe, expect, test } from "@jest/globals";

import { convertUseLifecycleInterface } from "../use-lifecycle-interface.js";

describe("convertUseLifecycleInterface", () => {
    test("conversion without arguments", () => {
        const result = convertUseLifecycleInterface({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/use-lifecycle-interface",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
