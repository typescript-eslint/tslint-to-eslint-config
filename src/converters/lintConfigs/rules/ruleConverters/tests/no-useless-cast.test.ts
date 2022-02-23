import { describe, expect, test } from "@jest/globals";

import { convertNoUselessCast } from "../no-useless-cast";

describe("convertNoUselessCast", () => {
    test("conversion without arguments", () => {
        const result = convertNoUselessCast({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unnecessary-type-assertion",
                },
            ],
        });
    });
});
