import { describe, expect, test } from "@jest/globals";

import { convertNoInvalidThis } from "../no-invalid-this";

describe("convertNoInvalidThis", () => {
    test("conversion without arguments", () => {
        const result = convertNoInvalidThis({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["Functions in methods will no longer be ignored."],
                    ruleName: "no-invalid-this",
                },
            ],
        });
    });

    test("conversion with check-function-in-method", () => {
        const result = convertNoInvalidThis({
            ruleArguments: ["check-function-in-method"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-invalid-this",
                },
            ],
        });
    });
});
