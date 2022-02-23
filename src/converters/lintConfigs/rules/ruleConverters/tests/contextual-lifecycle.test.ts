import { describe, expect, test } from "@jest/globals";

import { convertContextualLifecycle } from "../contextual-lifecycle";

describe("convertContextualLifecycle", () => {
    test("conversion without arguments", () => {
        const result = convertContextualLifecycle({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/contextual-lifecycle",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
