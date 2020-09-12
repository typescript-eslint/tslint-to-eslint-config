import { convertNoDuplicateSwitchCase } from "../no-duplicate-switch-case";

describe(convertNoDuplicateSwitchCase, () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateSwitchCase({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-duplicate-case",
                },
            ],
        });
    });
});
