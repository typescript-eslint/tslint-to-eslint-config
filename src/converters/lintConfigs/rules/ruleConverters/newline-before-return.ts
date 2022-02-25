import { RuleConverter } from "../ruleConverter.js";

export const convertNewlineBeforeReturn: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "padding-line-between-statements",
                ruleArguments: [
                    {
                        blankLine: "always",
                        prev: "*",
                        next: "return",
                    },
                ],
            },
        ],
    };
};
