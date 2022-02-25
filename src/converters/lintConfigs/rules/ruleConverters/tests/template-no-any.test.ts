import { describe, expect, test } from "@jest/globals";

import { convertTemplateNoAny } from "../template-no-any.js";

describe("convertTemplateNoAny", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateNoAny({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/no-any",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
