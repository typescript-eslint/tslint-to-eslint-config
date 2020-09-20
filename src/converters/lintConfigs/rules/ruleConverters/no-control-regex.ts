import { RuleConverter } from "../ruleConverter";

export const convertNoControlRegex: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-control-regex",
            },
        ],
    };
};
