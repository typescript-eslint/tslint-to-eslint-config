import { RuleConverter } from "../../converter";

export const convertNoUnusedCss: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-unused-css",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
