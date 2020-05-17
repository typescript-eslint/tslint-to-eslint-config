import { RuleConverter } from "../../converter";

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
