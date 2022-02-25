import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoNestedSubscribe } from "../rxjs-no-nested-subscribe.js";

describe("convertRxjsNoNestedSubscribe", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoNestedSubscribe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-nested-subscribe",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
