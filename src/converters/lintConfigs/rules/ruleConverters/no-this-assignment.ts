import { RuleConverter } from "../ruleConverter.js";

export const convertNoThisAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-this-alias",
            },
        ],
    };
};
