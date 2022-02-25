import { describe, expect, test } from "@jest/globals";

import { convertPreferConst } from "../prefer-const.js";

describe("convertPreferConst", () => {
    test("conversion without arguments", () => {
        const result = convertPreferConst({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-const",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertPreferConst({
            ruleArguments: ["all"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["all"],
                    ruleName: "prefer-const",
                },
            ],
        });
    });
});
