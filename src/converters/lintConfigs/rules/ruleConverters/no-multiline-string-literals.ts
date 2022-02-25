import { RuleConverter } from "../ruleConverter.js";

export const convertNoMultilineStringLiterals: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-multi-str",
            },
        ],
    };
};
