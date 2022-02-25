import { RuleConverter } from "../ruleConverter.js";

export const convertNoForInArray: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-for-in-array",
            },
        ],
    };
};
