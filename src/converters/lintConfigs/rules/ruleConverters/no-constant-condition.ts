import { RuleConverter } from "../ruleConverter";

export const convertNoConstantCondition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-constant-condition",
            },
        ],
    };
};
