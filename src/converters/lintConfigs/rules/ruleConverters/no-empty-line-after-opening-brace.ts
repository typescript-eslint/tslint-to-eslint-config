import { RuleConverter } from "../ruleConverter.js";

export const convertNoEmptyLineAfterOpeningBrace: RuleConverter = () => {
    return {
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
    };
};
