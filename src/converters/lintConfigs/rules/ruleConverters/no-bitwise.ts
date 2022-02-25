import { RuleConverter } from "../ruleConverter.js";

export const convertNoBitwise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-bitwise",
            },
        ],
    };
};
