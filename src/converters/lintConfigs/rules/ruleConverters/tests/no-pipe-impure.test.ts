import { describe, expect, test } from "@jest/globals";

import { convertNoPipeImpure } from "../no-pipe-impure.js";

describe("convertNoPipeImpure", () => {
    test("conversion without arguments", () => {
        const result = convertNoPipeImpure({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-pipe-impure",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
