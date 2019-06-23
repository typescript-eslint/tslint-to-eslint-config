import { RuleConverter } from "../converter";

export const convertUnifiedSignatures: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/unified-signatures",
            },
        ],
    };
};
