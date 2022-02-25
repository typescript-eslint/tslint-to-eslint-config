import { describe, expect, test } from "@jest/globals";

import { convertAdjacentOverloadSignatures } from "../adjacent-overload-signatures.js";

describe("convertAdjacentOverloadSignatures", () => {
    test("conversion without arguments", () => {
        const result = convertAdjacentOverloadSignatures({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/adjacent-overload-signatures",
                },
            ],
        });
    });
});
