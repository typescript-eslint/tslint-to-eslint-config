import { describe, expect, test } from "@jest/globals";

import { convertNgrxActionHygiene } from "../ngrx-action-hygiene";

describe("convertNgrxActionHygiene", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxActionHygiene({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/good-action-hygiene",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
