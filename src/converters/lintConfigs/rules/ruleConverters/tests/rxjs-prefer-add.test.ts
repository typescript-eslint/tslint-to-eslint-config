import { describe, expect, test } from "@jest/globals";

import { convertRxjsPreferAdd } from "../rxjs-prefer-add.js";

describe("convertRxjsPreferAdd", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
