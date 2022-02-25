import { RuleConverter } from "../ruleConverter.js";

export const convertNoStringThrow: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-throw-literal",
            },
        ],
    };
};
