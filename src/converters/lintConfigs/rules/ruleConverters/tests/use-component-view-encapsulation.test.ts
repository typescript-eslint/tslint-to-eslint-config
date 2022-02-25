import { describe, expect, test } from "@jest/globals";

import { convertUseComponentViewEncapsulation } from "../use-component-view-encapsulation.js";

describe("convertUseComponentViewEncapsulation", () => {
    test("conversion without arguments", () => {
        const result = convertUseComponentViewEncapsulation({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/use-component-view-encapsulation",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
