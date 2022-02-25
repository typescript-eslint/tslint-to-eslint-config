import { describe, expect, test } from "@jest/globals";

import { convertRxjsAdd } from "../rxjs-add.js";

describe("convertRxjsAdd", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsAdd({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
