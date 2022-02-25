import { describe, expect, test } from "@jest/globals";

import { convertUseDefaultTypeParameter } from "../use-default-type-parameter.js";

describe("convertUseDefaultTypeParameter", () => {
    test("conversion without arguments", () => {
        const result = convertUseDefaultTypeParameter({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-unnecessary-type-arguments",
                },
            ],
        });
    });
});
