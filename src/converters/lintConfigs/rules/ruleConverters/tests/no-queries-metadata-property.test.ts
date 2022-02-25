import { describe, expect, test } from "@jest/globals";

import { convertNoQueriesMetadataProperty } from "../no-queries-metadata-property.js";

describe("convertNoQueriesMetadataProperty", () => {
    test("conversion without arguments", () => {
        const result = convertNoQueriesMetadataProperty({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-queries-metadata-property",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
