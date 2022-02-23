import { describe, expect, test } from "@jest/globals";

import { convertJsxEqualsSpacing } from "../jsx-equals-spacing";

describe("convertJsxEqualsSpacing", () => {
    test("conversion without arguments", () => {
        const result = convertJsxEqualsSpacing({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-equals-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with 'always' argument", () => {
        const alwaysResult = convertJsxEqualsSpacing({
            ruleArguments: ["always"],
        });

        expect(alwaysResult).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "react/jsx-equals-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with 'never' argument", () => {
        const neverResult = convertJsxEqualsSpacing({
            ruleArguments: ["never"],
        });

        expect(neverResult).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "react/jsx-equals-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
