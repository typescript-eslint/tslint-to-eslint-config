import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoOperator } from "../rxjs-no-operator.js";

describe("convertRxjsNoOperator", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoOperator({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
