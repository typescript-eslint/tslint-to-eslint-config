import { convertPreferOutputReadonly } from "../prefer-output-readonly";

describe(convertPreferOutputReadonly, () => {
    test("conversion without arguments", () => {
        const result = convertPreferOutputReadonly({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/prefer-output-readonly",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
