import { describe, expect, test } from "@jest/globals";

import { convertNoObjectLiteralTypeAssertion } from "../no-object-literal-type-assertion.js";

describe("convertNoObjectLiteralTypeAssertion", () => {
    test("conversion without arguments", () => {
        const result = convertNoObjectLiteralTypeAssertion({
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
