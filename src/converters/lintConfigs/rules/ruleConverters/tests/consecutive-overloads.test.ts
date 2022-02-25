import { describe, expect, test } from "@jest/globals";

import { convertConsecutiveOverloads } from "../consecutive-overloads.js";

describe("convertConsecutiveOverloads", () => {
    test("conversion without arguments", () => {
        const result = convertConsecutiveOverloads({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/adjacent-overload-signatures",
                },
            ],
        });
    });
});
