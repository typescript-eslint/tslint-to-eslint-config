import { RuleConverter } from "../ruleConverter.js";

export const convertNewParens: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "new-parens",
            },
        ],
    };
};
