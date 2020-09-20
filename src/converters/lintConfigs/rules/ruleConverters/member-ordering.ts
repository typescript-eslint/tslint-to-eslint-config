import { RuleConverter } from "../ruleConverter";

export const convertMemberOrdering: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/member-ordering",
            },
        ],
    };
};
