import { RuleConverter } from "../ruleConverter";

export const convertNoStringThrow: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-throw-literal",
            },
        ],
    };
};
