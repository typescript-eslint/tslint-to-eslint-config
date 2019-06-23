import { RuleConverter } from "../converter";

export const convertTypeLiteralDelimiter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/member-delimiter-style",
            },
        ],
    };
};
