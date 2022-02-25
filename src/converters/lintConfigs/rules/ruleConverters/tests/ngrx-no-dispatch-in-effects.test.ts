import { describe, expect, test } from "@jest/globals";

import { convertNgrxNoDispatchInEffects } from "../ngrx-no-dispatch-in-effects.js";

describe("convertNgrxNoDispatchInEffects", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoDispatchInEffects({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-dispatch-in-effects",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
