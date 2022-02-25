import { describe, expect, test } from "@jest/globals";

import { convertRxjsThrowError } from "../rxjs-throw-error.js";

describe("convertRxjsThrowError", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsThrowError({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/throw-error",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
