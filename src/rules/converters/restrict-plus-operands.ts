import { RuleConverter } from "../converter";

export const convertRestrictPlusOperands: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/restrict-plus-operands",
            },
        ],
    };
};
