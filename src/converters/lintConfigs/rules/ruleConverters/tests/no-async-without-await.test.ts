import { describe, expect, test } from "@jest/globals";

import { convertNoAsyncWithoutAwait } from "../no-async-without-await.js";

describe("convertNoAsyncWithoutAwait", () => {
    test("conversion without arguments", () => {
        const result = convertNoAsyncWithoutAwait({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "require-await",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/require-await",
                },
            ],
        });
    });
});
