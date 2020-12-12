import { convertJsxSpaceBeforeTrailingSlash } from "../jsx-space-before-trailing-slash";

describe(convertJsxSpaceBeforeTrailingSlash, () => {
    test("conversion without arguments", () => {
        const result = convertJsxSpaceBeforeTrailingSlash({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-space-before-trailing-slash",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
