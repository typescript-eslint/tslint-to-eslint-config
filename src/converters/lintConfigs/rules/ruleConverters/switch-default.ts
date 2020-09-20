import { RuleConverter } from "../ruleConverter";

export const convertSwitchDefault: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "default-case",
            },
        ],
    };
};
