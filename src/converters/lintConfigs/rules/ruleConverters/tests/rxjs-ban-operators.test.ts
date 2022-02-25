import { describe, expect, test } from "@jest/globals";

import { convertRxjsBanOperators } from "../rxjs-ban-operators.js";

describe("convertRxjsBanOperators", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsBanOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-operators",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with options", () => {
        const result = convertRxjsBanOperators({
            ruleArguments: [{ concat: "Use the concat factory function" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-operators",
                    ruleArguments: [{ concat: "Use the concat factory function" }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
