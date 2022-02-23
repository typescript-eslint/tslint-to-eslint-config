import { describe, expect, test } from "@jest/globals";

import { convertNoEmptyInterface } from "../no-empty-interface";

describe("convertNoEmptyInterface", () => {
    test("conversion without arguments", () => {
        const result = convertNoEmptyInterface({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-empty-interface",
                },
            ],
        });
    });
});
