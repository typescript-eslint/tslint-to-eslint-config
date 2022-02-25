import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoIgnoredNotifier } from "../rxjs-no-ignored-notifier.js";

describe("convertRxjsNoIgnoredNotifier", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredNotifier({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-notifier",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
