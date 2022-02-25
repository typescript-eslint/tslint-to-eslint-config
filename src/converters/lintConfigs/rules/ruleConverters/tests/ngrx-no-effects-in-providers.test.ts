import { describe, expect, test } from "@jest/globals";

import { convertNgrxNoEffectsInProviders } from "../ngrx-no-effects-in-providers.js";

describe("convertNgrxNoEffectsInProviders", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoEffectsInProviders({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-effects-in-providers",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
