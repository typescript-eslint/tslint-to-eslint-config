import { describe, expect, test } from "@jest/globals";

import { convertCallableTypes } from "../callable-types.js";

describe("convertCallableTypes", () => {
    test("conversion without arguments", () => {
        const result = convertCallableTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/prefer-function-type",
                },
            ],
        });
    });
});
