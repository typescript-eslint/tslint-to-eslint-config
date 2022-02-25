import { describe, expect, test } from "@jest/globals";

import { convertNoParameterProperties } from "../no-parameter-properties.js";

describe("convertNoParameterProperties", () => {
    test("conversion without arguments", () => {
        const result = convertNoParameterProperties({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-parameter-properties",
                },
            ],
        });
    });
});
