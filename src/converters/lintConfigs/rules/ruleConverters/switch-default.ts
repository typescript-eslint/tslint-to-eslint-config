import { RuleConverter } from "../ruleConverter.js";

export const convertSwitchDefault: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "default-case",
            },
        ],
    };
};
