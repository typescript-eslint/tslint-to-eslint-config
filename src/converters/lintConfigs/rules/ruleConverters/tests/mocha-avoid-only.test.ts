import { describe, expect, test } from "@jest/globals";

import { convertMochaAvoidOnly } from "../mocha-avoid-only";

describe("convertMochaAvoidOnly", () => {
    test("conversion without arguments", () => {
        const result = convertMochaAvoidOnly({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-jest"],
            rules: [
                {
                    ruleName: "jest/no-focused-tests",
                },
            ],
        });
    });
});
