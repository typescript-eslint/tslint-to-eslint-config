import { RuleConverter } from "../ruleConverter.js";

export const convertConsecutiveOverloads: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/adjacent-overload-signatures",
            },
        ],
    };
};
