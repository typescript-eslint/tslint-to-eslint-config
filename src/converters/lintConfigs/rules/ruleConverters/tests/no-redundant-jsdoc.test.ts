import { describe, expect, test } from "@jest/globals";

import { convertNoRedundantJsdoc } from "../no-redundant-jsdoc";

describe("convertNoRedundantJsdoc", () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantJsdoc({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "jsdoc/no-types",
                },
            ],
            plugins: ["eslint-plugin-jsdoc"],
        });
    });
});
