import { describe, expect, test } from "@jest/globals";

import { convertUsePipeTransformInterface } from "../use-pipe-transform-interface";

describe("convertUsePipeTransformInterface", () => {
    test("conversion without arguments", () => {
        const result = convertUsePipeTransformInterface({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/use-pipe-transform-interface",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
