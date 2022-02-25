import { describe, expect, test } from "@jest/globals";

import { convertPreferDefaultLast } from "../prefer-default-last.js";

describe("convertPreferDefaultLast", () => {
    test("conversion without arguments", () => {
        const result = convertPreferDefaultLast({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "default-case-last",
                },
            ],
        });
    });
});
