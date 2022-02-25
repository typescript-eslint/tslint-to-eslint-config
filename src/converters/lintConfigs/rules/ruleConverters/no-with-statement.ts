import { RuleConverter } from "../ruleConverter.js";

export const convertNoWithStatement: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-with",
            },
        ],
    };
};
