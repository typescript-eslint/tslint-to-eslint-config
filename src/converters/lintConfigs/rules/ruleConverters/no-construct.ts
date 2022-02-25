import { RuleConverter } from "../ruleConverter.js";

export const convertNoConstruct: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-new-wrappers",
            },
        ],
    };
};
