import { RuleConverter } from "../../converter";

export const convertTemplateCyclomaticComplexity: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template/cyclomatic-complexity",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin-template"],
    };
};
