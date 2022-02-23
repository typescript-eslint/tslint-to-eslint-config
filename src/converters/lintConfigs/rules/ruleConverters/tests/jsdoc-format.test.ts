import { describe, expect, test } from "@jest/globals";

import { convertJSDocFormat, JSDocNoticeMsg } from "../jsdoc-format";

describe("convertJSDocFormat", () => {
    test("conversion without arguments", () => {
        const result = convertJSDocFormat({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "jsdoc/check-alignment",
                },
                {
                    ruleName: "jsdoc/check-indentation",
                },
                {
                    ruleName: "jsdoc/newline-after-description",
                },
            ],
            notices: [JSDocNoticeMsg],
            plugins: ["eslint-plugin-jsdoc"],
        });
    });
});
