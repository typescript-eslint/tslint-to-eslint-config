import { RuleConverter } from "../ruleConverter.js";

export const convertNoEmptyDestructuring: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-empty-pattern",
            },
        ],
    };
};
