import { describe, expect, test } from "@jest/globals";

import { convertPromiseFunctionAsync } from "../promise-function-async";

describe("convertPromiseFunctionAsync", () => {
    test("conversion without arguments", () => {
        const result = convertPromiseFunctionAsync({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/promise-function-async",
                },
            ],
        });
    });
});
