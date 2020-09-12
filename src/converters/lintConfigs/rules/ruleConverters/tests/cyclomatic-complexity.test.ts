import { convertCyclomaticComplexity } from "../cyclomatic-complexity";

describe(convertCyclomaticComplexity, () => {
    test("conversion without arguments", () => {
        const result = convertCyclomaticComplexity({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "complexity",
                },
            ],
        });
    });

    test("conversion with a maximum argument", () => {
        const result = convertCyclomaticComplexity({
            ruleArguments: [12],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            max: 12,
                        },
                    ],
                    ruleName: "complexity",
                },
            ],
        });
    });
});
