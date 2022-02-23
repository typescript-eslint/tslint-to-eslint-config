import { describe, expect, test } from "@jest/globals";

import { convertTripleEquals } from "../triple-equals";

describe("convertTripleEquals", () => {
    test("conversion without arguments", () => {
        const result = convertTripleEquals({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "eqeqeq",
                    notices: [],
                },
            ],
        });
    });

    test("conversion with an allow-null-check argument", () => {
        const result = convertTripleEquals({
            ruleArguments: ["allow-null-check"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["smart"],
                    ruleName: "eqeqeq",
                    notices: [
                        'Option "smart" allows for comparing two literal values, evaluating the value of typeof and null comparisons.',
                    ],
                },
            ],
        });
    });

    test("conversion with an allow-undefined-check argument", () => {
        const result = convertTripleEquals({
            ruleArguments: ["allow-undefined-check"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["smart"],
                    ruleName: "eqeqeq",
                    notices: [
                        'Option "allow-undefined-check" is not supported by ESLint. Option "smart" is the closest.',
                        'Option "smart" allows for comparing two literal values, evaluating the value of typeof and null comparisons.',
                    ],
                },
            ],
        });
    });
});
