import { RuleConverter } from "../ruleConverter";

export const convertTemplateBananaInBox: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/banana-in-box",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
