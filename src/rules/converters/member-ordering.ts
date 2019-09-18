import { RuleConverter } from "../converter";

export const convertMemberOrdering: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "member-ordering",
            },
        ],
    };
};
