import { RuleConverter } from "../ruleConverter";

export const convertNoSwitchCaseFallThrough: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-fallthrough",
            },
        ],
    };
};
