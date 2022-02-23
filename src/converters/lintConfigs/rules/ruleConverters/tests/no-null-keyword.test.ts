import { describe, expect, test } from "@jest/globals";

import { convertNoNullKeyword } from "../no-null-keyword";

describe("convertNoNullKeyword", () => {
    test("conversion without arguments", () => {
        const result = convertNoNullKeyword({
            ruleArguments: [],
        });

        expect(result).toEqual({
            notices: ["Null types will no longer be handled."],
            rules: [
                {
                    ruleName: "no-null/no-null",
                },
            ],
            plugins: ["eslint-plugin-no-null"],
        });
    });
});
