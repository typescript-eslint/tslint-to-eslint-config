import { RuleConverter } from "../ruleConverter";

export const convertPreferDefaultLast: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "default-case-last",
            },
        ],
    };
};
