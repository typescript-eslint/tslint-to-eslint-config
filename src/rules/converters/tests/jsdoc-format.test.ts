import { convertJSDocFormat } from "../jsdoc-format";

describe(convertJSDocFormat, () => {
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
            plugins: ["eslint-plugin-jsdoc"],
        });
    });
});
