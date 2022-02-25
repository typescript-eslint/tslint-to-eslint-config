import { describe, expect, test } from "@jest/globals";

import { convertRelativeUrlPrefix } from "../relative-url-prefix.js";

describe("convertRelativeUrlPrefix", () => {
    test("conversion without arguments", () => {
        const result = convertRelativeUrlPrefix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/relative-url-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
