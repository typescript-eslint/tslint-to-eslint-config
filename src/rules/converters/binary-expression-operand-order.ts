import { RuleConverter } from "../converter";

export const convertBinaryExpressionOperandOrder: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "yoda",
            },
        ],
    };
};
