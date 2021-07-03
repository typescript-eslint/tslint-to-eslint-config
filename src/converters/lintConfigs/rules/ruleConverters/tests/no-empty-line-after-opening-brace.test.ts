import { convertNoEmptyLineAfterOpeningBrace } from "../no-empty-line-after-opening-brace";

describe(convertNoEmptyLineAfterOpeningBrace, () => {
    test("conversion ", () => {
        const result = convertNoEmptyLineAfterOpeningBrace({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint's padded-blocks rule also bans a blank line before a closing brace.",
                    ],
                    ruleArguments: [
                        {
                            blocks: "never",
                        },
                        {
                            allowSingleLineBlocks: true,
                        },
                    ],
                    ruleName: "padded-blocks",
                },
            ],
        });
    });
});
