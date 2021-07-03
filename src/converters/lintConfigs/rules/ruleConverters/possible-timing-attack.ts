import { RuleConverter } from "../ruleConverter";

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
