import { RuleConverter } from "../../ruleConverter";

export const convertNoSmallSwitch: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-small-switch",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
