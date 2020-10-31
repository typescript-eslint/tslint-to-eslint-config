import { convertJsxNoBind } from "../jsx-no-bind";

describe(convertJsxNoBind, () => {
    test("conversion without arguments", () => {
        const result = convertJsxNoBind({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-no-bind",
                    notices: ["ESLint rule 'jsx-no-bind' also checks for arrow functions"],
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
