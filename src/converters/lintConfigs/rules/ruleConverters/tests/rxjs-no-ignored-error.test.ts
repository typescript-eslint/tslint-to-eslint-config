import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoIgnoredError } from "../rxjs-no-ignored-error";

describe("convertRxjsNoIgnoredError", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredError({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-error",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
