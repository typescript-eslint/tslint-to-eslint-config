import { convertNoInvertedBooleanCheck } from "../no-inverted-boolean-check";

describe(convertNoInvertedBooleanCheck, () => {
    test("conversion without arguments", () => {
        const result = convertNoInvertedBooleanCheck({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-inverted-boolean-check",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
