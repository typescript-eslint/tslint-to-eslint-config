import { describe, expect, test } from "@jest/globals";

import { convertObjectLiteralShorthand } from "../object-literal-shorthand.js";

describe("convertObjectLiteralShorthand", () => {
    test("conversion without arguments", () => {
        const result = convertObjectLiteralShorthand({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "object-shorthand",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertObjectLiteralShorthand({
            ruleArguments: ["never"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "object-shorthand",
                },
            ],
        });
    });
});
