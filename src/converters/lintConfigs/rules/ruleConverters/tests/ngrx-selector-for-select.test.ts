import { describe, expect, test } from "@jest/globals";

import { convertNgrxSelectorForSelect } from "../ngrx-selector-for-select";

describe("convertNgrxSelectorForSelect", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxSelectorForSelect({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/use-selector-in-select",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
