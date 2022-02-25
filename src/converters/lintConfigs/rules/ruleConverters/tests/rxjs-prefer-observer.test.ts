import { describe, expect, test } from "@jest/globals";

import { convertRxjsPreferObserver } from "../rxjs-prefer-observer.js";

describe("convertRxjsPreferObserver", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferObserver({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/prefer-observer",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `allowNext` argument", () => {
        const result = convertRxjsPreferObserver({
            ruleArguments: [{ allowNext: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/prefer-observer",
                    ruleArguments: [{ allowNext: false }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
