import { describe, expect, test } from "@jest/globals";

import { convertNoVariableUsageBeforeDeclaration } from "../no-variable-usage-before-declaration";

describe("convertNoVariableUsageBeforeDeclaration", () => {
    test("conversion without arguments", () => {
        const result = convertNoVariableUsageBeforeDeclaration({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-use-before-define",
                    ruleSeverity: "off",
                },
                {
                    ruleArguments: [{ variables: true }],
                    ruleName: "@typescript-eslint/no-use-before-define",
                },
            ],
        });
    });
});
