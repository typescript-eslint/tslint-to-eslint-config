import { RuleConverter } from "../ruleConverter";

export const convertNoConstruct: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-new-wrappers",
            },
        ],
    };
};
