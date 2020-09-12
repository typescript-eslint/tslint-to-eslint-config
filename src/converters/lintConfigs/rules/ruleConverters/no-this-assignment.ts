import { RuleConverter } from "../ruleConverter";

export const convertNoThisAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-this-alias",
            },
        ],
    };
};
