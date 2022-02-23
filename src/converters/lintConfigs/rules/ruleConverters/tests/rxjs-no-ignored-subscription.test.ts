import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoIgnoredSubscription } from "../rxjs-no-ignored-subscription";

describe("convertRxjsNoIgnoredSubscription", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredSubscription({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-subscription",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
