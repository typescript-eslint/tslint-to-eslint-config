import { describe, expect, test } from "@jest/globals";

import { convertNoParameterReassignment } from "../no-parameter-reassignment";

describe("convertNoParameterReassignment", () => {
    test("conversion without arguments", () => {
        const result = convertNoParameterReassignment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-param-reassign",
                },
            ],
        });
    });
});
