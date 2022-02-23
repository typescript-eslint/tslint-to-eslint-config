import { describe, expect, test } from "@jest/globals";

import { convertForin } from "../forin";

describe("convertForin", () => {
    test("conversion without arguments", () => {
        const result = convertForin({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "guard-for-in",
                },
            ],
        });
    });
});
