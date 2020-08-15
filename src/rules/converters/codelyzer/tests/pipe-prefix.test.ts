import { convertPipePrefix } from "../pipe-prefix";

describe(convertPipePrefix, () => {
    test("conversion without arguments", () => {
        const result = convertPipePrefix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/pipe-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertPipePrefix({
            ruleArguments: ["ng", "sg", "mg"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            prefixes: ["ng", "sg", "mg"],
                        },
                    ],
                    ruleName: "@angular-eslint/pipe-prefix",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
