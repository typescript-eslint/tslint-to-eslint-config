import { RuleConverter } from "../ruleConverter.js";

export const convertPreferForOf: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-for-of",
            },
        ],
    };
};
