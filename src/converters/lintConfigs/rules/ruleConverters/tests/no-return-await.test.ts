import { describe, expect, test } from "@jest/globals";

import { convertNoReturnAwait } from "../no-return-await.js";

describe("convertNoReturnAwait", () => {
    test("conversion without arguments", () => {
        const result = convertNoReturnAwait({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-return-await",
                },
            ],
        });
    });
});
