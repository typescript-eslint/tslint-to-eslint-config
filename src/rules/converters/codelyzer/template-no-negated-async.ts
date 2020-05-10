import { RuleConverter } from "../../converter";

export const convertTemplateNoNegatedAsync: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-no-negated-async",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
