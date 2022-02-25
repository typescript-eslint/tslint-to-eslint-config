import { RuleConverter } from "../ruleConverter.js";

export const convertNoExtraSemicolon: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-semi",
                ruleSeverity: "off",
            },
            {
                ruleName: "@typescript-eslint/no-extra-semi",
            },
        ],
    };
};
