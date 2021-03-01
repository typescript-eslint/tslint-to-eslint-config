import { RuleConverter } from "../../ruleConverter";

export const convertTemplateNoDistractingElements: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/no-distracting-elements",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
