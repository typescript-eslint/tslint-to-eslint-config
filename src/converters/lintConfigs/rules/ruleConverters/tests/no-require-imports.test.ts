import { describe, expect, test } from "@jest/globals";

import { convertNoRequireImports } from "../no-require-imports.js";

describe("convertNoRequireImports", () => {
    test("conversion without arguments", () => {
        const result = convertNoRequireImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-require-imports",
                },
            ],
        });
    });
});
