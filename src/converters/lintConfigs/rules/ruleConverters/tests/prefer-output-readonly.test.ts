import { describe, expect, test } from "@jest/globals";

import { convertPreferOutputReadonly } from "../prefer-output-readonly.js";

describe("convertPreferOutputReadonly", () => {
    test("conversion without arguments", () => {
        const result = convertPreferOutputReadonly({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/prefer-output-readonly",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
