import { describe, expect, test } from "@jest/globals";

import { convertParametersMaxNumber } from "../parameters-max-number.js";

describe("convertParametersMaxNumber", () => {
    test("conversion without arguments", () => {
        const result = convertParametersMaxNumber({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ max: 7 }],
                    ruleName: "max-params",
                },
            ],
        });
    });

    test("conversion with maximum argument", () => {
        const result = convertParametersMaxNumber({
            ruleArguments: [10],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ max: 10 }],
                    ruleName: "max-params",
                },
            ],
        });
    });
});
