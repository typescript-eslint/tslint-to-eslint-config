import { describe, expect, test } from "@jest/globals";

import { convertNoRedundantBoolean } from "../no-redundant-boolean.js";

describe("convertNoRedundantBoolean", () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantBoolean({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-redundant-boolean",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
