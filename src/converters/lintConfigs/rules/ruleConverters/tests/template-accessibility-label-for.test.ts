import { describe, expect, test } from "@jest/globals";

import { convertTemplateAccessibilityLabelFor } from "../template-accessibility-label-for";

describe("convertTemplateAccessibilityLabelFor", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateAccessibilityLabelFor({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/accessibility-label-has-associated-control",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertTemplateAccessibilityLabelFor({
            ruleArguments: [
                {
                    controlComponents: ["app-input", "app-select"],
                    labelAttributes: ["id"],
                    labelComponents: ["app-label"],
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            controlComponents: ["app-input", "app-select"],
                            labelComponents: [
                                {
                                    inputs: ["id"],
                                    selector: "app-label",
                                },
                            ],
                        },
                    ],
                    ruleName: "@angular-eslint/template/accessibility-label-has-associated-control",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });

    test("conversion with arguments, missing labelAttributes", () => {
        const result = convertTemplateAccessibilityLabelFor({
            ruleArguments: [
                {
                    controlComponents: ["app-input", "app-select"],
                    labelComponents: ["app-label"],
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            controlComponents: ["app-input", "app-select"],
                            labelComponents: [
                                {
                                    inputs: [],
                                    selector: "app-label",
                                },
                            ],
                        },
                    ],
                    ruleName: "@angular-eslint/template/accessibility-label-has-associated-control",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
