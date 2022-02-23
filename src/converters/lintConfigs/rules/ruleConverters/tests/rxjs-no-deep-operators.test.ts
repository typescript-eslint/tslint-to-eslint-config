import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoDeepOperators } from "../rxjs-no-deep-operators";

describe("convertRxjsNoDeepOperators", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoDeepOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
