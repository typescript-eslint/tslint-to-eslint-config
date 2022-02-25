import { describe, expect, test } from "@jest/globals";

import { convertDeprecation } from "../deprecation.js";

describe("convertDeprecation", () => {
    test("conversion without arguments", () => {
        const result = convertDeprecation({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "import/no-deprecated",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });
});
