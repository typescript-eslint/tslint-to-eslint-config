import { convertNoUnusedVariable, NO_UNUSED_VARIABLE_NOTICE } from "../no-unused-variable";

describe(convertNoUnusedVariable, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnusedVariable({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-vars",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/no-unused-vars",
                    notices: [NO_UNUSED_VARIABLE_NOTICE],
                },
            ],
        });
    });
});
