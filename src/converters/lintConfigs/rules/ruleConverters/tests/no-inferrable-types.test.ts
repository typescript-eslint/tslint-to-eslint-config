import { describe, expect, test } from "@jest/globals";

import { convertNoInferrableTypes } from "../no-inferrable-types";

describe("convertNoInferrableTypes", () => {
    test("conversion without arguments", () => {
        const result = convertNoInferrableTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-inferrable-types",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertNoInferrableTypes({
            ruleArguments: ["ignore-params"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-inferrable-types",
                    ruleArguments: [{ ignoreParameters: true }],
                },
            ],
        });
    });

    test("conversion with arguments", () => {
        const result = convertNoInferrableTypes({
            ruleArguments: ["ignore-params", "ignore-properties"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-inferrable-types",
                    ruleArguments: [{ ignoreParameters: true, ignoreProperties: true }],
                },
            ],
        });
    });
});
