import { RuleConverter } from "../../ruleConverter";

export const convertNoEmptyDestructuring: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-empty-pattern",
            },
        ],
    };
};
