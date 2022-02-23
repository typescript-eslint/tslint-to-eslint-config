import { describe, expect, test } from "@jest/globals";

import { convertNoOutputsMetadataProperty } from "../no-outputs-metadata-property";

describe("convertNoOutputsMetadataProperty", () => {
    test("conversion without arguments", () => {
        const result = convertNoOutputsMetadataProperty({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-outputs-metadata-property",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
