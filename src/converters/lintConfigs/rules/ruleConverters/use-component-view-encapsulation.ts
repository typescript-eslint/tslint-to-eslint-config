import { RuleConverter } from "../ruleConverter.js";

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
