import { describe, expect, test } from "@jest/globals";

import { convertNgrxNoReducerInKeyNames } from "../ngrx-no-reducer-in-key-names.js";

describe("convertNgrxNoReducerInKeyNames", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoReducerInKeyNames({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-reducer-in-key-names",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
