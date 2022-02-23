import { describe, expect, test } from "@jest/globals";

import { convertNgrxEffectCreatorAndDecorator } from "../ngrx-effect-creator-and-decorator";

describe("convertNgrxEffectCreatorAndDecorator", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxEffectCreatorAndDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-effect-decorator-and-creator",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
