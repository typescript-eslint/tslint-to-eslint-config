import { describe, expect, test } from "@jest/globals";

import { convertNoStringThrow } from "../no-string-throw";

describe("convertNoStringThrow", () => {
    test("conversion without arguments", () => {
        const result = convertNoStringThrow({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-throw-literal",
                },
            ],
        });
    });
});
