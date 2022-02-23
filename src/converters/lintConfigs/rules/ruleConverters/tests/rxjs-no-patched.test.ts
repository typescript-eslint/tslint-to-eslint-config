import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoPatched } from "../rxjs-no-patched";

describe("convertRxjsNoPatched", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoPatched({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
