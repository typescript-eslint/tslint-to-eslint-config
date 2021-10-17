import { RuleConverter } from "../ruleConverter";

export const convertNoRedundantParentheses: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-parens",
            },
        ],
    };
};
