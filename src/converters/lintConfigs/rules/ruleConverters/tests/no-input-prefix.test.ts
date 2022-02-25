import { describe, expect, test } from "@jest/globals";

import { convertNoInputPrefix } from "../no-input-prefix.js";

describe("convertNoInputPrefix", () => {
    test("conversion without arguments", () => {
        const result = convertNoInputPrefix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-input-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertNoInputPrefix({
            ruleArguments: ["can", "is", "should"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            prefixes: ["can", "is", "should"],
                        },
                    ],
                    ruleName: "@angular-eslint/no-input-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
