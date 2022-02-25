import { describe, expect, test } from "@jest/globals";

import { convertNoCollapsibleIf } from "../no-collapsible-if.js";

describe("convertNoCollapsibleIf", () => {
    test("conversion without arguments", () => {
        const result = convertNoCollapsibleIf({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-collapsible-if",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
