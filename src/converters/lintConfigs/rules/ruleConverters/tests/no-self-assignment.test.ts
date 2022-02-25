import { describe, expect, test } from "@jest/globals";

import { convertNoSelfAssignment } from "../no-self-assignment.js";

describe("convertNoSelfAssignment", () => {
    test("conversion without arguments", () => {
        const result = convertNoSelfAssignment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-self-assign",
                },
            ],
        });
    });
});
