import { describe, expect, test } from "@jest/globals";

import { convertNoVarKeyword } from "../no-var-keyword";

describe("convertNoVarKeyword", () => {
    test("conversion without arguments", () => {
        const result = convertNoVarKeyword({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-var",
                },
            ],
        });
    });
});
