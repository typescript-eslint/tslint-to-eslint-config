import { describe, expect, test } from "@jest/globals";

import { convertAwaitPromise } from "../await-promise";

describe("convertAwaitPromise", () => {
    test("conversion without arguments", () => {
        const result = convertAwaitPromise({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/await-thenable",
                },
            ],
        });
    });
});
