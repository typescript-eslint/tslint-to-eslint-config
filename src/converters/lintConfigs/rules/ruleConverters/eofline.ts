import { RuleConverter } from "../ruleConverter";

export const convertEofline: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "eol-last",
            },
        ],
    };
};
