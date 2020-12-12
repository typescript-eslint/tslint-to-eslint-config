import { convertJsxBanProps } from "../jsx-ban-props";

describe(convertJsxBanProps, () => {
    test("conversion without arguments", () => {
        const result = convertJsxBanProps({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/forbid-component-props",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with a single prop", () => {
        const result = convertJsxBanProps({
            ruleArguments: [["someProp"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            propName: "someProp",
                        },
                    ],
                    ruleName: "react/forbid-component-props",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });

    test("conversion with a message", () => {
        const result = convertJsxBanProps({
            ruleArguments: [["someProp"], ["anotherProp", "Optional explanation"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            propName: "someProp",
                        },
                        {
                            message: "Optional explanation",
                            propName: "anotherProp",
                        },
                    ],
                    ruleName: "react/forbid-component-props",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
