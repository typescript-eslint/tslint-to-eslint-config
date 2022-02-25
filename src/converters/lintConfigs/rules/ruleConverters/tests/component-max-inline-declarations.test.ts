import { describe, expect, test } from "@jest/globals";

import { convertComponentMaxInlineDeclarations } from "../component-max-inline-declarations.js";

describe("convertComponentMaxInlineDeclarations", () => {
    test("conversion without arguments", () => {
        const result = convertComponentMaxInlineDeclarations({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/component-max-inline-declarations",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertComponentMaxInlineDeclarations({
            ruleArguments: [
                {
                    template: 7,
                    styles: 2,
                    animations: 10,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            template: 7,
                            styles: 2,
                            animations: 10,
                        },
                    ],
                    ruleName: "@angular-eslint/component-max-inline-declarations",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
