import { describe, expect, test } from "@jest/globals";

import { convertRxjsPreferAngularComposition } from "../rxjs-prefer-angular-composition.js";

describe("convertRxjsPreferAngularComposition", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferAngularComposition({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-composition",
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });
});
