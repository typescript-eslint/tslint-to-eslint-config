import { convertNoOutputOnPrefix } from "../no-output-on-prefix";

describe(convertNoOutputOnPrefix, () => {
    test("conversion without arguments", () => {
        const result = convertNoOutputOnPrefix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-output-on-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
