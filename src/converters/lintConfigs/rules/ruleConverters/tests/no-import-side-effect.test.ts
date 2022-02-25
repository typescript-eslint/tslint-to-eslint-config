import { describe, expect, test } from "@jest/globals";

import { convertNoImportSideEffect } from "../no-import-side-effect.js";

describe("convertNoImportSideEffect", () => {
    test("conversion without arguments", () => {
        const result = convertNoImportSideEffect({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    plugins: ["eslint-plugin-import"],
                    ruleName: "import/no-unassigned-import",
                },
            ],
        });
    });

    test("conversion with arguments", () => {
        const result = convertNoImportSideEffect({
            ruleArguments: [true, { "ignore-module": "(\\.html|\\.css)$" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    plugins: ["eslint-plugin-import"],
                    notices: [
                        "ESLint's import/no-unassigned-import now accepts a glob pattern for ignores; you'll need to manually convert your ignore-module settings.",
                    ],
                    ruleName: "import/no-unassigned-import",
                },
            ],
        });
    });
});
