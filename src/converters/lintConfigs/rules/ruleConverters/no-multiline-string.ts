import { RuleConverter } from "../ruleConverter";

export const convertNoMultilineString: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-multi-str",
            },
        ],
    };
};
