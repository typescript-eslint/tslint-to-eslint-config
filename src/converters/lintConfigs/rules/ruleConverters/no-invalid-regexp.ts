import { RuleConverter } from "../ruleConverter";

export const convertNoInvalidRegexp: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-invalid-regexp",
            },
        ],
    };
};
