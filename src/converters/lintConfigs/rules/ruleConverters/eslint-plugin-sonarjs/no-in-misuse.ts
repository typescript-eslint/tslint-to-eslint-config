import { RuleConverter } from "../../ruleConverter";

export const convertNoInMisuse: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-for-in-array",
            },
        ],
    };
};
