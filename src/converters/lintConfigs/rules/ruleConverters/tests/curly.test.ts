import { describe, expect, test } from "@jest/globals";

import { convertCurly } from "../curly";

describe("convertCurly", () => {
    test("conversion without arguments", () => {
        const result = convertCurly({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "curly",
                },
            ],
        });
    });

    test("conversion with an ignore-same-line argument", () => {
        const result = convertCurly({
            ruleArguments: ["ignore-same-line"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["multi-line"],
                    ruleName: "curly",
                },
            ],
        });
    });

    test("conversion with an as-needed argument", () => {
        const result = convertCurly({
            ruleArguments: ["as-needed"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["multi-or-nest"],
                    ruleName: "curly",
                },
            ],
        });
    });
});
