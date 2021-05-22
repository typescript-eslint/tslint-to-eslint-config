import { convertPreferImmediateReturn } from "../prefer-immediate-return";

describe(convertPreferImmediateReturn, () => {
    test("conversion without arguments", () => {
        const result = convertPreferImmediateReturn({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/prefer-immediate-return",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
