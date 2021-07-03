import { convertReactTsxCurlySpacing } from "../react-tsx-curly-spacing";

describe(convertReactTsxCurlySpacing, () => {
    test("conversion with 'always'", () => {
        const result = convertReactTsxCurlySpacing({
            ruleArguments: ["always"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-react"],
            rules: [
                {
                    ruleArguments: [{ when: "always" }],
                    ruleName: "react/jsx-curly-spacing",
                },
            ],
        });
    });

    test("conversion with 'never'", () => {
        const result = convertReactTsxCurlySpacing({
            ruleArguments: ["never"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-react"],
            rules: [
                {
                    ruleArguments: [{ when: "never" }],
                    ruleName: "react/jsx-curly-spacing",
                },
            ],
        });
    });

    test("conversion with 'never' and 'allowMultiline'", () => {
        const result = convertReactTsxCurlySpacing({
            ruleArguments: ["never", { allowMultiline: true }],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-react"],
            rules: [
                {
                    ruleArguments: [
                        {
                            allowMultiline: true,
                            when: "never",
                        },
                    ],
                    ruleName: "react/jsx-curly-spacing",
                },
            ],
        });
    });
});
