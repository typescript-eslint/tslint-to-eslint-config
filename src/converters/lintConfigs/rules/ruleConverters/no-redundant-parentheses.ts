import { RuleConverter } from "../ruleConverter.js";

export const convertNoRedundantParentheses: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-parens",
            },
        ],
    };
};
