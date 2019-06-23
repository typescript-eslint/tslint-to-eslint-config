import { RuleConverter } from "../converter";

export const convertNewlinePerChainedCall: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "newline-per-chained-call",
            },
        ],
    };
};
