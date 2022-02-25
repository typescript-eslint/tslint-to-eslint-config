import { describe, expect, test } from "@jest/globals";

import { convertNoOutputRename } from "../no-output-rename.js";

describe("convertNoOutputRename", () => {
    test("conversion without arguments", () => {
        const result = convertNoOutputRename({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-output-rename",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
