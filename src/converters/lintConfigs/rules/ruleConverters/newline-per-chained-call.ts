import { RuleConverter } from "../ruleConverter.js";

export const convertNewlinePerChainedCall: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "newline-per-chained-call",
            },
        ],
    };
};
