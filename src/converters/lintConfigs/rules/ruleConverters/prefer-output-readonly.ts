import { RuleConverter } from "../ruleConverter.js";

export const convertPreferOutputReadonly: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/prefer-output-readonly",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
