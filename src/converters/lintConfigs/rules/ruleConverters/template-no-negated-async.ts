import { RuleConverter } from "../ruleConverter.js";

export const convertTemplateNoNegatedAsync: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/eqeqeq",
            },
            {
                ruleName: "@angular-eslint/template/no-negated-async",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
