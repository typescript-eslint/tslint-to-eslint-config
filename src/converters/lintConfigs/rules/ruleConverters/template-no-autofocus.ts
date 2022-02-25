import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateNoAutofocus: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/no-autofocus",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
