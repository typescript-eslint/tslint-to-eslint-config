import { describe, expect, test } from "@jest/globals";

import { convertJsxSpaceBeforeTrailingSlash } from "../jsx-space-before-trailing-slash";

describe("convertJsxSpaceBeforeTrailingSlash", () => {
    test("conversion without arguments", () => {
        const result = convertJsxSpaceBeforeTrailingSlash({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            afterOpening: "allow",
                            closingSlash: "allow",
                        },
                    ],
                    ruleName: "react/jsx-tag-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
