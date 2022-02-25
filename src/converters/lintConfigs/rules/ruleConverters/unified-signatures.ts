import { RuleConverter } from "../ruleConverter.js";

export const convertUnifiedSignatures: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/unified-signatures",
            },
        ],
    };
};
