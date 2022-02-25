import { describe, expect, test } from "@jest/globals";

import { convertNoUnnecessaryClass } from "../no-unnecessary-class.js";

describe("convertNoUnnecessaryClass", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryClass({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-extraneous-class",
                },
            ],
        });
    });
});
