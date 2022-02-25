import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoIgnoredSubscribe } from "../rxjs-no-ignored-subscribe.js";

describe("convertRxjsNoIgnoredSubscribe", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredSubscribe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-subscribe",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
