import { RuleConverter } from "../../ruleConverter";

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
