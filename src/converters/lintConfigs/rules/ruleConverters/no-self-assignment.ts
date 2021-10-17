import { RuleConverter } from "../ruleConverter";

export const convertNoSelfAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-self-assign",
            },
        ],
    };
};
