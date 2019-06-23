import { convertBanTypes } from "../ban-types";

describe(convertBanTypes, () => {
    test("conversion without arguments", () => {
        const result = convertBanTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/ban-types",
                },
            ],
        });
    });
});
