import { convertJsxSelfClose } from "../jsx-self-close";

describe(convertJsxSelfClose, () => {
    test("conversion without arguments", () => {
        const result = convertJsxSelfClose({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-self-close",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
