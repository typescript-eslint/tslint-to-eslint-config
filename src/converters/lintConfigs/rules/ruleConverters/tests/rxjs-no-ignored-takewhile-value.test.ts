import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoIgnoredTakeWhileValue } from "../rxjs-no-ignored-takewhile-value";

describe("convertRxjsNoIgnoredTakeWhileValue", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredTakeWhileValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-takewhile-value",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
