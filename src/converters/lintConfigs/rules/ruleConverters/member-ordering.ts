import { RuleConverter } from "../ruleConverter.js";

export const convertMemberOrdering: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/member-ordering",
            },
        ],
    };
};
