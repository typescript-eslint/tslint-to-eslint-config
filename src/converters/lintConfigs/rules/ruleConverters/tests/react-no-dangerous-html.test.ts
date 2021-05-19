import { convertReactNoDangerousHtml } from "../react-no-dangerous-html";

describe(convertReactNoDangerousHtml, () => {
    test("conversion without arguments", () => {
        const result = convertReactNoDangerousHtml({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ['eslint-plugin-react'],
            rules: [
                {
                    ruleName: "react/no-danger",
                },
            ],
        });
    });
});
