import { RuleConverter } from "../ruleConverter";

export const convertUnifiedSignatures: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/unified-signatures",
            },
        ],
    };
};
