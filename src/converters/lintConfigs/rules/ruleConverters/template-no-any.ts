import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateNoAny: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/no-any",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
