import { RuleConverter } from "../ruleConverter";

export const convertBinaryExpressionOperandOrder: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "yoda",
            },
        ],
    };
};
