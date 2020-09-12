import { RuleConverter } from "../ruleConverter";

export const convertNoIrregularWhitespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-irregular-whitespace",
            },
        ],
    };
};
