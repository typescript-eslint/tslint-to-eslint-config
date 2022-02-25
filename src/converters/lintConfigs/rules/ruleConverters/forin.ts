import { RuleConverter } from "../ruleConverter.js";

export const convertForin: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "guard-for-in",
            },
        ],
    };
};
