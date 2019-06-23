import { convertNoParameterProperties } from "../no-parameter-properties";

describe(convertNoParameterProperties, () => {
    test("conversion without arguments", () => {
        const result = convertNoParameterProperties({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-parameter-properties",
                },
            ],
        });
    });
});
