import { RuleConverter } from "../ruleConverter";

export const convertAdjacentOverloadSignatures: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/adjacent-overload-signatures",
            },
        ],
    };
};
