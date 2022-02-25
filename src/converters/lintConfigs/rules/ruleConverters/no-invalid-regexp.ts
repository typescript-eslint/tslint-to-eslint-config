import { RuleConverter } from "../ruleConverter.js";

export const convertNoInvalidRegexp: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-invalid-regexp",
            },
        ],
    };
};
