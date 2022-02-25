import { describe, expect, test } from "@jest/globals";

import { convertUnifiedSignatures } from "../unified-signatures.js";

describe("convertUnifiedSignatures", () => {
    test("conversion without arguments", () => {
        const result = convertUnifiedSignatures({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/unified-signatures",
                },
            ],
        });
    });
});
