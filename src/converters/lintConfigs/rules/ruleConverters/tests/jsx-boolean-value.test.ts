import { describe, expect, test } from "@jest/globals";

import { convertJsxBooleanValue } from "../jsx-boolean-value.js";

describe("convertJsxBooleanValue", () => {
    test("conversion without arguments", () => {
        const result = convertJsxBooleanValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-boolean-value",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with arguments", () => {
        const alwaysResult = convertJsxBooleanValue({
            ruleArguments: ["always"],
        });
        const neverResult = convertJsxBooleanValue({
            ruleArguments: ["never"],
        });

        expect(alwaysResult).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "react/jsx-boolean-value",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
        expect(neverResult).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "react/jsx-boolean-value",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
