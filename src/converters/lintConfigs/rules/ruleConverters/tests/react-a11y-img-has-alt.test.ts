import { convertReactA11yImgHasAlt } from "../react-a11y-img-has-alt";

describe(convertReactA11yImgHasAlt, () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yImgHasAlt({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/alt-text",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const elements = ["Image"];
        const result = convertReactA11yImgHasAlt({
            ruleArguments: elements,
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleArguments: [{ elements }],
                    ruleName: "jsx-a11y/alt-text",
                },
            ],
        });
    });
});
