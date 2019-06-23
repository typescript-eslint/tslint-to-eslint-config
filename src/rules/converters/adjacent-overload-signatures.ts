import { RuleConverter } from "../converter";

export const convertAdjacentOverloadSignatures: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/adjacent-overload-signatures",
            },
        ],
    };
};
