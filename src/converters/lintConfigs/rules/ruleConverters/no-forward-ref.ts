import { RuleConverter } from "../ruleConverter.js";

export const convertNoForwardRef: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-forward-ref",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
