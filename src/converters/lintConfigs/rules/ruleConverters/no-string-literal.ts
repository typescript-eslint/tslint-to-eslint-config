import { RuleConverter } from "../ruleConverter";

export const convertNoStringLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/dot-notation",
            },
        ],
    };
};
