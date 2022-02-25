import { describe, expect, test } from "@jest/globals";

import { convertNoControlRegex } from "../no-control-regex.js";

describe("convertNoControlRegex", () => {
    test("conversion without arguments", () => {
        const result = convertNoControlRegex({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-control-regex",
                },
            ],
        });
    });
});
