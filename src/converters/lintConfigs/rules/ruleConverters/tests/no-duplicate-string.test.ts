import { describe, expect, test } from "@jest/globals";

import { convertNoDuplicateString } from "../no-duplicate-string.js";

describe("convertNoDuplicateString", () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateString({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-duplicate-string",
                },
            ],
            plugins: ["sonarjs"],
        });
    });

    test("conversion with maximum argument", () => {
        const result = convertNoDuplicateString({
            ruleArguments: [5],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [5],
                    ruleName: "sonarjs/no-duplicate-string",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
