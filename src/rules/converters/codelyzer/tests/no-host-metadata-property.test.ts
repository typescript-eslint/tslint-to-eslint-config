import { convertNoHostMetadataProperty } from "../no-host-metadata-property";

describe(convertNoHostMetadataProperty, () => {
    test("conversion without arguments", () => {
        const result = convertNoHostMetadataProperty({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-host-metadata-property",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
