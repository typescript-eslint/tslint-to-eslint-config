import { RuleConverter } from "../ruleConverter";

export const convertNoConditionalAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-cond-assign",
            },
        ],
    };
};
