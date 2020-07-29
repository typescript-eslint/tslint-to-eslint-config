import { convertJsxBanElements } from "../jsx-ban-elements";

describe(convertJsxBanElements, () => {
    test("conversion without arg", () => {
        const noArgumentResult = convertJsxBanElements({
            ruleArguments: [],
        });
        expect(noArgumentResult).toEqual({
            rules: [
                {
                    ruleName: "react/forbid-elements",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
    test("conversion with arguments", () => {
        const argumentResult = convertJsxBanElements({
            ruleArguments: [
                ["span", "Use div instead."],
                ["Button", "Use button instead."],
                ["div"],
            ],
        });

        expect(argumentResult).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            forbid: [
                                {
                                    element: "span",
                                    message: "Use div instead.",
                                },
                                {
                                    element: "Button",
                                    message: "Use button instead.",
                                },
                                {
                                    element: "div",
                                },
                            ],
                        },
                    ],
                    ruleName: "react/forbid-elements",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
