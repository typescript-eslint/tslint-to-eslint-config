import { RuleConverter } from "../ruleConverter.js";

export const convertNoDuplicateSwitchCase: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-duplicate-case",
            },
        ],
    };
};
