import { describe, expect, test } from "@jest/globals";

import { convertNoConflictingLifecycle } from "../no-conflicting-lifecycle";

describe("convertNoConflictingLifecycle", () => {
    test("conversion without arguments", () => {
        const result = convertNoConflictingLifecycle({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-conflicting-lifecycle",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
