import { describe, expect, test } from "@jest/globals";

import { convertUseComponentSelector } from "../use-component-selector";

describe("convertUseComponentSelector", () => {
    test("conversion without arguments", () => {
        const result = convertUseComponentSelector({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/use-component-selector",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
