import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoUnusedAdd } from "../rxjs-no-unused-add";

describe("convertRxjsNoUnusedAdd", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnusedAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
