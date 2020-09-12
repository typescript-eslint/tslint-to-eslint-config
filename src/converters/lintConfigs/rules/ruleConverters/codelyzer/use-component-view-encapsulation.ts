import { RuleConverter } from "../../ruleConverter";

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
