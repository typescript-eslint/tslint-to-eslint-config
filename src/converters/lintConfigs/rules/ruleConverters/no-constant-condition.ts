import { RuleConverter } from "../ruleConverter.js";

export const convertNoConstantCondition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-constant-condition",
            },
        ],
    };
};
