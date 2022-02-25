import { RuleConverter } from "../ruleConverter.js";

export const convertNoConditionalAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-cond-assign",
            },
        ],
    };
};
