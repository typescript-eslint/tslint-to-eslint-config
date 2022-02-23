import { describe, expect, test } from "@jest/globals";

import { convertNoInputsMetadataProperty } from "../no-inputs-metadata-property";

describe("convertNoInputsMetadataProperty", () => {
    test("conversion without arguments", () => {
        const result = convertNoInputsMetadataProperty({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-inputs-metadata-property",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
