import { RuleConverter } from "../../ruleConverter";

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
