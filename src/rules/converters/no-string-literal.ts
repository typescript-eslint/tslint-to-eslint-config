import { RuleConverter } from "../converter";

export const convertNoStringLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "dot-notation",
            },
        ],
    };
};
