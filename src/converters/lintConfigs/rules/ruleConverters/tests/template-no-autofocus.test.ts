import { describe, expect, test } from "@jest/globals";

import { convertTemplateNoAutofocus } from "../template-no-autofocus.js";

describe("convertTemplateNoAutofocus", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateNoAutofocus({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/no-autofocus",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
