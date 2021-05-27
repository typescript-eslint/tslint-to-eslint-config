import { convertNoUseBeforeDeclare } from "../no-use-before-declare";

describe(convertNoUseBeforeDeclare, () => {
    test("conversion without arguments", () => {
        const result = convertNoUseBeforeDeclare({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-use-before-define",
                    ruleSeverity: "off",
                },
                {
                    ruleName: "@typescript-eslint/no-use-before-define",
                },
            ],
        });
    });
});
