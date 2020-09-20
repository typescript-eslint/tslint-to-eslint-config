import { RuleConverter } from "../ruleConverter";

export const convertPreferForOf: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-for-of",
            },
        ],
    };
};
