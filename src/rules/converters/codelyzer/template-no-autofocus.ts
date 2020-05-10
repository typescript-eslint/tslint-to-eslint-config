import { RuleConverter } from "../../converter";

export const convertTemplateNoAutofocus: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/template-no-autofocus",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
