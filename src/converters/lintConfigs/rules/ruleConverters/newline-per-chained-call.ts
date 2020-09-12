import { RuleConverter } from "../ruleConverter";

export const convertNewlinePerChainedCall: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "newline-per-chained-call",
            },
        ],
    };
};
