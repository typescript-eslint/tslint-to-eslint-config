import { describe, expect, test } from "@jest/globals";

import { convertNoUselessCatch } from "../no-useless-catch.js";

describe("convertNoUselessCatch", () => {
    test("conversion without arguments", () => {
        const result = convertNoUselessCatch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-useless-catch",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
