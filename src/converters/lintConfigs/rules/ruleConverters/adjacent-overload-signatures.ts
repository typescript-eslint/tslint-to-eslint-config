import { RuleConverter } from "../ruleConverter.js";

export const convertAdjacentOverloadSignatures: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/adjacent-overload-signatures",
            },
        ],
    };
};
