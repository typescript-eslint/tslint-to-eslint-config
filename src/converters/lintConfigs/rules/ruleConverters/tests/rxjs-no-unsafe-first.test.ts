import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoUnsafeFirst } from "../rxjs-no-unsafe-first.js";

describe("convertRxjsNoUnsafeFirst", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeFirst({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-first",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
