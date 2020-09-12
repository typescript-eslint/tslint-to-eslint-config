import { RuleConverter } from "../ruleConverter";

export const convertNoForInArray: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-for-in-array",
            },
        ],
    };
};
