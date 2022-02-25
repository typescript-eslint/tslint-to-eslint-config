import { RuleConverter } from "../ruleConverter.js";

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
