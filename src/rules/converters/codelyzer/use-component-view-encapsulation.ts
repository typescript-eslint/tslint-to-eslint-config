import { RuleConverter } from "../../converter";

export const convertUseComponentViewEncapsulation: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-component-view-encapsulation",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
