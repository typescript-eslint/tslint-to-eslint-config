import { RuleConverter } from "../ruleConverter";

export const convertNoWithStatement: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-with",
            },
        ],
    };
};
