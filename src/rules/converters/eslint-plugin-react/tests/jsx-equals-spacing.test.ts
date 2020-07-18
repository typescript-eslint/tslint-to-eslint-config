import { convertJsxEqualsSpacing } from "../jsx-equals-spacing";

describe(convertJsxEqualsSpacing, () => {
    test("conversion without arguments", () => {
        const result = convertJsxEqualsSpacing({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-equals-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with arguments", () => {
        const alwaysResult = convertJsxEqualsSpacing({
            ruleArguments: ["always"],
        });
        const neverResult = convertJsxEqualsSpacing({
            ruleArguments: ["never"],
        });

        expect(alwaysResult).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "react/jsx-equals-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
        expect(neverResult).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "react/jsx-equals-spacing",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
