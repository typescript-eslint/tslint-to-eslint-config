import { convertReactA11yAnchors } from "../react-a11y-anchors";

describe(convertReactA11yAnchors, () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yAnchors({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/anchor-is-valid",
                },
            ],
        });
    });

    test("conversion with arguments", () => {
        const result = convertReactA11yAnchors({
            ruleArguments: [
                {
                    "ignore-case": true,
                    "ignore-whitespace": "trim",
                },
            ],
        });

        expect(result).toEqual({
            notices: [
                `jsx-a11y/anchor-is-valid does not support the 'ignore-case' option.`,
                `jsx-a11y/anchor-is-valid does not support the 'ignore-whitespace' option.`,
            ],
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/anchor-is-valid",
                },
            ],
        });
    });
});
