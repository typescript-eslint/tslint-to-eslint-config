import { describe, expect, test } from "@jest/globals";

import { convertNoBigFunction } from "../no-big-function";

describe("convertNoBigFunction", () => {
    test("conversion without arguments", () => {
        const result = convertNoBigFunction({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ max: 200 }],
                    ruleName: "max-lines-per-function",
                },
            ],
        });
    });

    test("conversion with maximum argument", () => {
        const result = convertNoBigFunction({
            ruleArguments: [100],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ max: 100 }],
                    ruleName: "max-lines-per-function",
                },
            ],
        });
    });
});
