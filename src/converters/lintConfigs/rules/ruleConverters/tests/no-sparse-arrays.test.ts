import { describe, expect, test } from "@jest/globals";

import { convertNoSparseArrays } from "../no-sparse-arrays.js";

describe("convertNoSparseArrays", () => {
    test("conversion without arguments", () => {
        const result = convertNoSparseArrays({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-sparse-arrays",
                },
            ],
        });
    });
});
