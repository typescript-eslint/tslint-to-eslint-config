import { describe, expect, test } from "@jest/globals";

import { convertNoCookies } from "../no-cookies";

describe("convertNoCookies", () => {
    test("conversion without arguments", () => {
        const result = convertNoCookies({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            message: "Forbidden call to document.cookie",
                            selector:
                                'MemberExpression[object.name="document"][property.name="cookie"]',
                        },
                    ],
                    ruleName: "no-restricted-syntax",
                },
            ],
        });
    });
});
