import { describe, expect, test } from "@jest/globals";

import { convertNoAlphabeticalSort } from "../no-alphabetical-sort.js";

describe("convertNoAlphabeticalSort", () => {
    test("conversion without arguments", () => {
        const result = convertNoAlphabeticalSort({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ ignoreStringArrays: true }],
                    ruleName: "@typescript-eslint/require-array-sort-compare",
                },
            ],
        });
    });
});
