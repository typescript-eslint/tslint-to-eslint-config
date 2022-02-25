import { describe, expect, test } from "@jest/globals";

import { convertNoConditionalAssignment } from "../no-conditional-assignment.js";

describe("convertNoConditionalAssignment", () => {
    test("conversion without arguments", () => {
        const result = convertNoConditionalAssignment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-cond-assign",
                },
            ],
        });
    });
});
