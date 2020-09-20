import { RuleConverter } from "../ruleConverter";

export const convertRestrictPlusOperands: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/restrict-plus-operands",
            },
        ],
    };
};
