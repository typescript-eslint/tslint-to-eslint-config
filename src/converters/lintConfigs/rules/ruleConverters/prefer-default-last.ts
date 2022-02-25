import { RuleConverter } from "../ruleConverter.js";

export const convertPreferDefaultLast: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "default-case-last",
            },
        ],
    };
};
