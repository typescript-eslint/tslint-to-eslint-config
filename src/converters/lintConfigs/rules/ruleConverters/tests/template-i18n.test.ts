import { describe, expect, test } from "@jest/globals";

import { convertTemplateI18N } from "../template-i18n.js";

describe("convertTemplateI18N", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateI18N({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/i18n",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertTemplateI18N({
            ruleArguments: ["check-id", "check-text"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            checkId: true,
                            checkText: true,
                        },
                    ],
                    ruleName: "@angular-eslint/template/i18n",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
