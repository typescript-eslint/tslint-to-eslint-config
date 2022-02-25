import { describe, expect, test } from "@jest/globals";

import { convertRxjsPreferAngularTakeuntil } from "../rxjs-prefer-angular-takeuntil.js";

describe("convertRxjsPreferAngularTakeuntil", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferAngularTakeuntil({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });

    test("conversion with `alias` argument", () => {
        const result = convertRxjsPreferAngularTakeuntil({
            ruleArguments: [{ alias: ["untilDestroyed"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                    ruleArguments: [{ alias: ["untilDestroyed"] }],
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });

    test("conversion with `checkComplete` argument", () => {
        const result = convertRxjsPreferAngularTakeuntil({
            ruleArguments: [{ checkComplete: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                    ruleArguments: [{ checkComplete: true }],
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });

    test("conversion with `checkDecorators` argument", () => {
        const result = convertRxjsPreferAngularTakeuntil({
            ruleArguments: [{ checkDecorators: ["Component"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                    ruleArguments: [{ checkDecorators: ["Component"] }],
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });
});
