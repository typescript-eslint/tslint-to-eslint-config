import { describe, expect, test } from "@jest/globals";

import { convertPreferTemplate } from "../prefer-template.js";

describe("convertPreferTemplate", () => {
    test("conversion without arguments", () => {
        const result = convertPreferTemplate({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-template",
                },
            ],
        });
    });

    test("conversion with allow-single-concat", () => {
        const result = convertPreferTemplate({
            ruleArguments: ["allow-single-concat"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["Single concatenations will no longer be ignored."],
                    ruleName: "prefer-template",
                },
            ],
        });
    });
});
