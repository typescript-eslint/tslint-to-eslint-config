import { convertDeprecation } from "../deprecation";

describe(convertDeprecation, () => {
    test("conversion without arguments", () => {
        const result = convertDeprecation({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "import/no-deprecated",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });
});
