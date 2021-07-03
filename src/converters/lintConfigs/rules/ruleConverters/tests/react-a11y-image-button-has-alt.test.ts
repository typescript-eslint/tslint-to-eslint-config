import { convertReactA11yImageButtonHasAlt } from "../react-a11y-image-button-has-alt";

describe(convertReactA11yImageButtonHasAlt, () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yImageButtonHasAlt({
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
});
