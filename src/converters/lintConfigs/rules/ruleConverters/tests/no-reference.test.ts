import { describe, expect, test } from "@jest/globals";

import { convertNoReference } from "../no-reference.js";

describe("convertNoReference", () => {
    test("conversion without arguments", () => {
        const result = convertNoReference({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/triple-slash-reference",
                },
            ],
        });
    });
});
