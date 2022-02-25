import { describe, expect, test } from "@jest/globals";

import { convertNoOutputNative } from "../no-output-native.js";

describe("convertNoOutputNative", () => {
    test("conversion without arguments", () => {
        const result = convertNoOutputNative({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-output-native",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
