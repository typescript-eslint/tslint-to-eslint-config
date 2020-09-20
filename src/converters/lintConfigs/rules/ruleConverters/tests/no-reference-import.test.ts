import { convertNoReferenceImport } from "../no-reference-import";

describe(convertNoReferenceImport, () => {
    test("conversion without arguments", () => {
        const result = convertNoReferenceImport({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/triple-slash-reference",
                    ruleArguments: [
                        {
                            path: "always",
                            types: "prefer-import",
                            lib: "always",
                        },
                    ],
                },
            ],
        });
    });
});
