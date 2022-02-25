import { describe, expect, test } from "@jest/globals";

import { convertNoFunctionExpression } from "../no-function-expression.js";

describe("convertNoFunctionExpression", () => {
    test("conversion without arguments", () => {
        const result = convertNoFunctionExpression({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
