import { RuleConverter } from "../ruleConverter";

export const convertNoMultilineStringLiterals: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-multi-str",
            },
        ],
    };
};
