import { RuleConverter } from "../ruleConverter.js";

export const convertRestrictPlusOperands: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/restrict-plus-operands",
            },
        ],
    };
};
