import { RuleConverter } from "../ruleConverter";

export const convertNoDuplicateSwitchCase: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-duplicate-case",
            },
        ],
    };
};
