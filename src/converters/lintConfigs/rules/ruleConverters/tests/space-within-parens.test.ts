import { describe, expect, test } from "@jest/globals";

import { convertSpaceWithinParens } from "../space-within-parens.js";

describe("convertSpaceWithinParens", () => {
    test("conversion without arguments", () => {
        const result = convertSpaceWithinParens({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "space-in-parens",
                },
            ],
        });
    });

    test("conversion with 0 spaces required", () => {
        const result = convertSpaceWithinParens({
            ruleArguments: [0],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "space-in-parens",
                },
            ],
        });
    });

    test("conversion with min spaces arguement", () => {
        const result = convertSpaceWithinParens({
            ruleArguments: [5],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["The number of spaces will be ignored"],
                    ruleArguments: ["always"],
                    ruleName: "space-in-parens",
                },
            ],
        });
    });
});
