import { describe, expect, test } from "@jest/globals";

import { convertComponentClassSuffix } from "../component-class-suffix.js";

describe("convertComponentClassSuffix", () => {
    test("conversion without arguments", () => {
        const result = convertComponentClassSuffix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/component-class-suffix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertComponentClassSuffix({
            ruleArguments: ["Component", "View"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            suffixes: ["Component", "View"],
                        },
                    ],
                    ruleName: "@angular-eslint/component-class-suffix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
