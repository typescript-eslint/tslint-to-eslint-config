import { RuleConverter } from "../ruleConverter.js";

export const convertNoSmallSwitch: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-small-switch",
            },
        ],
        plugins: ["sonarjs"],
    };
};
