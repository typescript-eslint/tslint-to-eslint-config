import { RuleConverter } from "../converter";

export const convertNewParens: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "new-parens",
            },
        ],
    };
};
