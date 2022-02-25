import { describe, expect, test } from "@jest/globals";

import { convertRxjsDeepOperators } from "../rxjs-deep-operators.js";

describe("convertRxjsDeepOperators", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsDeepOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
