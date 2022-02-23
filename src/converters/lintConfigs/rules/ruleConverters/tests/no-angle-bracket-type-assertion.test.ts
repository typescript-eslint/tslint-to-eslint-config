import { describe, expect, test } from "@jest/globals";

import { convertNoAngleBracketTypeAssertion } from "../no-angle-bracket-type-assertion";

describe("convertNoAngleBracketTypeAssertion", () => {
    test("conversion without arguments", () => {
        const result = convertNoAngleBracketTypeAssertion({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/consistent-type-assertions",
                },
            ],
        });
    });
});
