import { RuleConverter } from "../ruleConverter";

export const convertNewParens: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "new-parens",
            },
        ],
    };
};
