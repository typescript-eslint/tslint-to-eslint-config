import { RuleConverter } from "../converter";

export const convertForin: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "guard-for-in",
            },
        ],
    };
};
