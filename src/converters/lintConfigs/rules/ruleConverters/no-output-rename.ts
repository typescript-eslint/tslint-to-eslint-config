import { RuleConverter } from "../ruleConverter.js";

export const convertNoOutputRename: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-output-rename",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
