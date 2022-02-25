import { describe, expect, test } from "@jest/globals";

import { convertNoInternalModule } from "../no-internal-module.js";

describe("convertNoInternalModule", () => {
    test("conversion without arguments", () => {
        const result = convertNoInternalModule({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/prefer-namespace-keyword",
                },
            ],
        });
    });
});
