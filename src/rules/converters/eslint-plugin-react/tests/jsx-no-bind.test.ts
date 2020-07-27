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
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
