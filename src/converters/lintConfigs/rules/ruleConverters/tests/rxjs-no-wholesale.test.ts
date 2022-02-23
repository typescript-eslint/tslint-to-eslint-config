import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoWholesale } from "../rxjs-no-wholesale";

describe("convertRxjsNoWholesale", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoWholesale({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
