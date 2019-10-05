import { RuleConverter } from "../converter";

export const convertNewlineBeforeReturn: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "padding-line-between-statements",
                ruleArguments: [
                    "error",
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
