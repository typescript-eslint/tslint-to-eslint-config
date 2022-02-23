import { describe, expect, test } from "@jest/globals";

import { convertNoDuplicateImports } from "../no-duplicate-imports";

describe("convertNoDuplicateImports", () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-duplicate-imports",
                },
            ],
        });
    });

    test("conversion with allow-namespace-imports argument", () => {
        const result = convertNoDuplicateImports({
            ruleArguments: ["allow-namespace-imports"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint does not support optional config allow-namespace-imports."],
                    ruleName: "no-duplicate-imports",
                },
            ],
        });
    });
});
