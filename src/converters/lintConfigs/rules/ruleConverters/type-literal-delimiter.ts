import { RuleConverter } from "../ruleConverter.js";

export const convertTypeLiteralDelimiter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/member-delimiter-style",
            },
        ],
    };
};
