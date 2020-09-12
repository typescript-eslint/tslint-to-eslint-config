import { convertNoUnnecessaryQualifier } from "../no-unnecessary-qualifier";

describe(convertNoUnnecessaryQualifier, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryQualifier({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unnecessary-qualifier",
                },
            ],
        });
    });
});
