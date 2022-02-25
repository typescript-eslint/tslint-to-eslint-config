import { describe, expect, test } from "@jest/globals";

import { convertNoDuplicateVariable } from "../no-duplicate-variable.js";

describe("convertNoDuplicateVariable", () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateVariable({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-redeclare",
                },
            ],
        });
    });

    test("conversion with check parameters argument", () => {
        const result = convertNoDuplicateVariable({
            ruleArguments: ["check-parameters"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-redeclare",
                    notices: ["ESLint does not support check-parameters."],
                },
            ],
        });
    });
});
