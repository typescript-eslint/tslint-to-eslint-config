import { describe, expect, test } from "@jest/globals";

import { convertComponentSelector } from "../component-selector";

describe("convertComponentSelector", () => {
    test("conversion with arguments of same type", () => {
        const result = convertComponentSelector({
            ruleArguments: ["attribute", "myPrefix", "camelCase"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            type: "attribute",
                            prefix: "myPrefix",
                            style: "camelCase",
                        },
                    ],
                    ruleName: "@angular-eslint/component-selector",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments of mixed type", () => {
        const result = convertComponentSelector({
            ruleArguments: ["element", ["ng", "ngx"], "kebab-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            type: "element",
                            prefix: ["ng", "ngx"],
                            style: "kebab-case",
                        },
                    ],
                    ruleName: "@angular-eslint/component-selector",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
