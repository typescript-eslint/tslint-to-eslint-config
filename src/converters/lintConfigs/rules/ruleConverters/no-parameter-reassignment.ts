import { RuleConverter } from "../ruleConverter";

export const convertNoParameterReassignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-param-reassign",
            },
        ],
    };
};
