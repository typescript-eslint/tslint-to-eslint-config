import { RuleConverter } from "../ruleConverter.js";

export const convertNoControlRegex: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-control-regex",
            },
        ],
    };
};
