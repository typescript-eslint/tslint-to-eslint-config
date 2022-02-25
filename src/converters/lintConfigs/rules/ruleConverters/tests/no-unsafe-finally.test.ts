import { describe, expect, test } from "@jest/globals";

import { convertNoUnsafeFinally } from "../no-unsafe-finally.js";

describe("convertNoUnsafeFinally", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeFinally({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unsafe-finally",
                },
            ],
        });
    });
});
