import { convertRelativeUrlPrefix } from "../relative-url-prefix";

describe(convertRelativeUrlPrefix, () => {
    test("conversion without arguments", () => {
        const result = convertRelativeUrlPrefix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/relative-url-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
