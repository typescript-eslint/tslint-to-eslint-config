import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoUnsafeCatch } from "../rxjs-no-unsafe-catch";

describe("convertRxjsNoUnsafeCatch", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeCatch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-catch",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `observable` argument", () => {
        const result = convertRxjsNoUnsafeCatch({
            ruleArguments: [{ observable: "action(s|\\$)?" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-catch",
                    ruleArguments: [{ observable: "action(s|\\$)?" }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
