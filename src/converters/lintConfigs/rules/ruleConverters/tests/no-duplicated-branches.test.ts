import { describe, expect, test } from "@jest/globals";

import { convertNoDuplicatedBranches } from "../no-duplicated-branches";

describe("convertNoDuplicatedBranches", () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicatedBranches({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-duplicated-branches",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
