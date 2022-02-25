import { describe, expect, test } from "@jest/globals";

import { convertUseInjectableProvidedIn } from "../use-injectable-provided-in.js";

describe("convertUseInjectableProvidedIn", () => {
    test("conversion without arguments", () => {
        const result = convertUseInjectableProvidedIn({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/use-injectable-provided-in",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
