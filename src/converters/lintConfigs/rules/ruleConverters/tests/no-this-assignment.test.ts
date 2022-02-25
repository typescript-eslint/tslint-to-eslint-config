import { describe, expect, test } from "@jest/globals";

import { convertNoThisAssignment } from "../no-this-assignment.js";

describe("convertNoThisAssignment", () => {
    test("conversion without arguments", () => {
        const result = convertNoThisAssignment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-this-alias",
                },
            ],
        });
    });
});
