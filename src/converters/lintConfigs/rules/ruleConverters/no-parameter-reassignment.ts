import { RuleConverter } from "../ruleConverter.js";

export const convertNoParameterReassignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-param-reassign",
            },
        ],
    };
};
