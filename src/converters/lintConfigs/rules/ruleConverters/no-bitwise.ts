import { RuleConverter } from "../ruleConverter";

export const convertNoBitwise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-bitwise",
            },
        ],
    };
};
