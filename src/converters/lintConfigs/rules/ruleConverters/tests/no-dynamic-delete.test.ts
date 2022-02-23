import { describe, expect, test } from "@jest/globals";

import { convertNoDynamicDelete } from "../no-dynamic-delete";

describe("convertNoDynamicDelete", () => {
    test("conversion without arguments", () => {
        const result = convertNoDynamicDelete({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-dynamic-delete",
                },
            ],
        });
    });
});
