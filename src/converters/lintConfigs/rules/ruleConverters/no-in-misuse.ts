import { RuleConverter } from "../ruleConverter.js";

export const convertNoInMisuse: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-for-in-array",
            },
        ],
    };
};
