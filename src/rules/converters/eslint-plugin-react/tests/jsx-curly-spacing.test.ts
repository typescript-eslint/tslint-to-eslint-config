import { convertJsxCurlySpacing } from "../jsx-curly-spacing";

describe(convertJsxCurlySpacing, () => {
    test("conversion without arguments", () => {
        const result = convertJsxCurlySpacing({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-curly-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with arguments", () => {
        const alwaysResult = convertJsxCurlySpacing({
            ruleArguments: ["always"],
        });
        const neverResult = convertJsxCurlySpacing({
            ruleArguments: ["never"],
        });

        expect(alwaysResult).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            when: "always",
                        },
                    ],
                    ruleName: "react/jsx-curly-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
        expect(neverResult).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            when: "never",
                        },
                    ],
                    ruleName: "react/jsx-curly-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
