import { RuleConverter } from "../ruleConverter.js";

export const convertBinaryExpressionOperandOrder: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "yoda",
            },
        ],
    };
};
