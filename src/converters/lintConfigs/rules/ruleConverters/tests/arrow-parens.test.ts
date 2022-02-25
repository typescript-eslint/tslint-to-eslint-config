import { describe, expect, test } from "@jest/globals";

import { convertArrowParens } from "../arrow-parens.js";

describe("convertArrowParens", () => {
    test("conversion without arguments", () => {
        const result = convertArrowParens({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "arrow-parens",
                },
            ],
        });
    });

    test("conversion with a ban-single-arg-parens argument", () => {
        const result = convertArrowParens({
            ruleArguments: ["ban-single-arg-parens"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["as-needed"],
                    ruleName: "arrow-parens",
                },
            ],
        });
    });
});
