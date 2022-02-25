import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateNoCallExpression: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/no-call-expression",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
