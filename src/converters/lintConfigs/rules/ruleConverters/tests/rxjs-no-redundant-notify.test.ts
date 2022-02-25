import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoRedundantNotify } from "../rxjs-no-redundant-notify.js";

describe("convertRxjsNoRedundantNotify", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoRedundantNotify({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-redundant-notify",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
