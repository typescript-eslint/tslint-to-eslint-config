import { RuleConverter } from "../ruleConverter.js";

export const convertNoSelfAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-self-assign",
            },
        ],
    };
};
