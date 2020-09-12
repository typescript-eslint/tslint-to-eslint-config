import { RuleConverter } from "../ruleConverter";

export const convertTypeLiteralDelimiter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/member-delimiter-style",
            },
        ],
    };
};
