import { describe, expect, test } from "@jest/globals";

import { convertNoEval } from "../no-eval.js";

describe("convertNoEval", () => {
    test("conversion without arguments", () => {
        const result = convertNoEval({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-eval",
                },
            ],
        });
    });
});
