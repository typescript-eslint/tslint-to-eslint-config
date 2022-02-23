import { describe, expect, test } from "@jest/globals";

import { convertNoSameLineConditional } from "../no-same-line-conditional";

describe("convertNoSameLineConditional", () => {
    test("conversion without arguments", () => {
        const result = convertNoSameLineConditional({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-same-line-conditional",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
