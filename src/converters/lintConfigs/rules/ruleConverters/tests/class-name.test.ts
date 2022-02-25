import { describe, expect, test } from "@jest/globals";

import { convertClassName } from "../class-name.js";

describe("convertClassName", () => {
    test("conversion without arguments", () => {
        const result = convertClassName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                },
            ],
        });
    });
});
