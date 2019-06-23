import { RuleConverter } from "../converter";

export const convertNoBitwise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-bitwise",
            },
        ],
    };
};
