import { RuleConverter } from "../ruleConverter";

export const convertNoStringLiteral: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "dot-notation",
                ruleSeverity: "off",
            },
            {
                ruleName: "@typescript-eslint/dot-notation",
            },
        ],
    };
};
