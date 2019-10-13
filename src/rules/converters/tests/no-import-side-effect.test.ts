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
                    ruleArguments: [{ allow: "(\\.html|\\.css)$" }],
                    ruleName: "no-import-side-effect",
                    notices: ["This now accepts a glob pattern, so your regex may need converted"],
                },
            ],
        });
    });
});
