import { RuleConverter } from "../converter";

export const convertPreferForOf: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-for-of",
            },
        ],
    };
};
