import { describe, expect, test } from "@jest/globals";

import { convertContextualDecorator } from "../contextual-decorator.js";

describe("convertContextualDecorator", () => {
    test("conversion without arguments", () => {
        const result = convertContextualDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/contextual-decorator",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
