import { RuleConverter } from "../ruleConverter.js";

export const convertNoIrregularWhitespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-irregular-whitespace",
            },
        ],
    };
};
