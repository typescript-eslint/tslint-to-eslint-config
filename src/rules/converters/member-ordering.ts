import { RuleConverter } from "../converter";

export const convertMemberOrdering: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/member-ordering",
            },
        ],
    };
};
