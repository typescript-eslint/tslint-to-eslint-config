import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoToPromise } from "../rxjs-no-topromise.js";

describe("convertRxjsNoToPromise", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoToPromise({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-topromise",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
