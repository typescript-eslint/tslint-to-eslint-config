import { RuleConverter } from "../ruleConverter.js";

export const convertNoSwitchCaseFallThrough: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-fallthrough",
            },
        ],
    };
};
