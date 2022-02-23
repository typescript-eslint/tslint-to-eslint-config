import { describe, expect, test } from "@jest/globals";

import { convertTemplateNoDistractingElements } from "../template-no-distracting-elements";

describe("convertTemplateNoDistractingElements", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateNoDistractingElements({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/no-distracting-elements",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
