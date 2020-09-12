import { RuleConverter } from "../ruleConverter";

export const convertNoParameterReassignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-param-reassign",
            },
        ],
    };
};
