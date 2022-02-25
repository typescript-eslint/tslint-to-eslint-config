import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoAdd } from "../rxjs-no-add.js";

describe("convertRxjsNoAdd", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
