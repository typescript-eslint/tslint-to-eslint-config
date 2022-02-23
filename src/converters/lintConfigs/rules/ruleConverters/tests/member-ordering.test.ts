import { describe, expect, test } from "@jest/globals";

import { convertMemberOrdering } from "../member-ordering";

describe("convertMemberOrdering", () => {
    test("conversion without arguments", () => {
        const result = convertMemberOrdering({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/member-ordering",
                },
            ],
        });
    });
});
