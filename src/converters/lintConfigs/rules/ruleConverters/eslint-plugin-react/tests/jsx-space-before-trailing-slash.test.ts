import { convertJsxSpaceBeforeTrailingSlash } from "../jsx-space-before-trailing-slash";

describe(convertJsxSpaceBeforeTrailingSlash, () => {
    test("conversion without arguments", () => {
        const result = convertJsxSpaceBeforeTrailingSlash({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            beforeSelfClosing: "always",
                        },
                    ],
                    ruleName: "react/jsx-tag-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
