import { describe, expect, test } from "@jest/globals";

import { convertNonLiteralRequire } from "../non-literal-require";

describe("convertNonLiteralRequire", () => {
    test("conversion without arguments", () => {
        const result = convertNonLiteralRequire({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-security"],
            rules: [
                {
                    ruleName: "security/detect-non-literal-require",
                },
            ],
        });
    });
});
