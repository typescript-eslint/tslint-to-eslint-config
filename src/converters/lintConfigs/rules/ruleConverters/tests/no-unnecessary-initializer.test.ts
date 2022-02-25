import { describe, expect, test } from "@jest/globals";

import { convertNoUnnecessaryInitializer } from "../no-unnecessary-initializer.js";

describe("convertNoUnnecessaryInitializer", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryInitializer({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-undef-init",
                },
            ],
        });
    });
});
