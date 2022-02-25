import { RuleConverter } from "../ruleConverter.js";

export const convertPossibleTimingAttack: RuleConverter = () => {
    return {
        plugins: ["eslint-plugin-security"],
        rules: [
            {
                ruleName: "security/detect-possible-timing-attacks",
            },
        ],
    };
};
