import { RuleConverter } from "../ruleConverter.js";

export const convertNoMultilineString: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-multi-str",
            },
        ],
    };
};
