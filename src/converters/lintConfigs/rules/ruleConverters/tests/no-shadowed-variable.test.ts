import { describe, expect, test } from "@jest/globals";

import { convertNoShadowedVariable } from "../no-shadowed-variable";

describe("convertNoShadowedVariable", () => {
    test("conversion without parameter", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-shadow",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "@typescript-eslint/no-shadow",
                },
            ],
        });
    });

    test("conversion with non-object parameter", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: ["will-be-ignored"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-shadow",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "@typescript-eslint/no-shadow",
                },
            ],
        });
    });

    test("conversion with empty parameter object", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [{}],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-shadow",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "@typescript-eslint/no-shadow",
                },
            ],
        });
    });

    test("conversion with disabled 'temporalDeadZone'", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [{ temporalDeadZone: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-shadow",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ hoist: "never" }],
                    ruleName: "@typescript-eslint/no-shadow",
                },
            ],
        });
    });

    test("conversion with disabled declaration types", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [{ class: false, underscore: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-shadow",
                    ruleSeverity: "off",
                },
                {
                    notices: [
                        "ESLint does not support disabling shadowed variable checks based on " +
                            "whether their names start with underscore or not, please use 'allow' in eslint configuration to " +
                            "provide specific variable names you want to disable the rule for.",
                        "ESLint does not support selectively disabling shadowed declaration checks " +
                            "depending on the type of declaration, so all kinds of declarations are checked.",
                    ],
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "@typescript-eslint/no-shadow",
                },
            ],
        });
    });
});
