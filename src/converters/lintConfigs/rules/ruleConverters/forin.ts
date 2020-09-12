import { RuleConverter } from "../ruleConverter";

export const convertForin: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "guard-for-in",
            },
        ],
    };
};
