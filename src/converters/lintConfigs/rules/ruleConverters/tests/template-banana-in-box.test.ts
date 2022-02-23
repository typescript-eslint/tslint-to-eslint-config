import { describe, expect, test } from "@jest/globals";

import { convertTemplateBananaInBox } from "../template-banana-in-box";

describe("convertTemplateBananaInBox", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateBananaInBox({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/banana-in-box",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
