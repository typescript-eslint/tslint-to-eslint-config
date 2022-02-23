import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoUnsafeScope } from "../rxjs-no-unsafe-scope";

describe("convertRxjsNoUnsafeScope", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeScope({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
