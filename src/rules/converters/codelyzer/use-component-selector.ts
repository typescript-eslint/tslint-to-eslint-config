import { RuleConverter } from "../../converter";

export const convertUseComponentSelector: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-component-selector",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
