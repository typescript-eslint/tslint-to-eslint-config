import { describe, expect, test } from "@jest/globals";

import { convertNoInMisuse } from "../no-in-misuse";

describe("convertNoInMisuse", () => {
    test("conversion without arguments", () => {
        const result = convertNoInMisuse({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-for-in-array",
                },
            ],
        });
    });
});
