import { describe, expect, test } from "@jest/globals";

import { convertOneVariablePerDeclaration } from "../one-variable-per-declaration";

describe("convertOneVariablePerDeclaration", () => {
    test("conversion without arguments", () => {
        const result = convertOneVariablePerDeclaration({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["Variables declared in for loops will no longer be checked."],
                    ruleArguments: ["never"],
                    ruleName: "one-var",
                },
            ],
        });
    });

    test("conversion with ignore-for-loop", () => {
        const result = convertOneVariablePerDeclaration({
            ruleArguments: ["ignore-for-loop"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["never"],
                    ruleName: "one-var",
                },
            ],
        });
    });
});
