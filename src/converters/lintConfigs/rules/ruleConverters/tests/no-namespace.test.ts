import { describe, expect, test } from "@jest/globals";

import { convertNoNamespace } from "../no-namespace";

describe("convertNoNamespace", () => {
    test("conversion without arguments", () => {
        const result = convertNoNamespace({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-namespace",
                },
            ],
        });
    });
});
