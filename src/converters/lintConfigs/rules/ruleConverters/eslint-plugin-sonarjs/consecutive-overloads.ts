import { RuleConverter } from "../../ruleConverter";

export const convertConsecutiveOverloads: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/adjacent-overload-signatures",
            },
        ],
    };
};
