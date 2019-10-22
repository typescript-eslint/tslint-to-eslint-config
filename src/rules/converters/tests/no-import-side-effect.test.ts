import { convertNoImportSideEffect } from "../no-import-side-effect";

describe(convertNoImportSideEffect, () => {
    test("conversion without arguments", () => {
        const result = convertNoImportSideEffect({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [],
                    ruleName: "no-import-side-effect",
                    notices: [],
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
                    ruleArguments: [],
                    ruleName: "no-import-side-effect",
                    notices: [
                        "ESLint's no-import-side-effect now accepts a glob pattern for ignores; you'll need to manually convert your ignore-module settings.",
                    ],
                },
            ],
        });
    });
});
