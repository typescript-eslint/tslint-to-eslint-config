import { RuleConverter } from "../converter";

export const convertNoConditionalAssignment: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-cond-assign",
            },
        ],
    };
};
