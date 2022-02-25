import { RuleConverter } from "../ruleConverter.js";

export const convertEofline: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "eol-last",
            },
        ],
    };
};
