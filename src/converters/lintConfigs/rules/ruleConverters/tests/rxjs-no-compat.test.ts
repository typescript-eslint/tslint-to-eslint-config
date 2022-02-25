import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoCompat } from "../rxjs-no-compat.js";

describe("convertRxjsNoCompat", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoCompat({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-compat",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
