import { convertNoUseBeforeDeclare } from "../no-use-before-declare";

describe(convertNoUseBeforeDeclare, () => {
    test("conversion without arguments", () => {
        const result = convertNoUseBeforeDeclare({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-use-before-define",
                },
            ],
        });
    });
});
