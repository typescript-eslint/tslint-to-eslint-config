import { describe, expect, test } from "@jest/globals";

import { convertCognitiveComplexity } from "../cognitive-complexity";

describe("convertCognitiveComplexity", () => {
    test("conversion without arguments", () => {
        const result = convertCognitiveComplexity({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/cognitive-complexity",
                },
            ],
            plugins: ["sonarjs"],
        });
    });

    test("conversion with maximum argument", () => {
        const result = convertCognitiveComplexity({
            ruleArguments: [10],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [10],
                    ruleName: "sonarjs/cognitive-complexity",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
