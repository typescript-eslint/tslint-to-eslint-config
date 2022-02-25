import { RuleConverter } from "../ruleConverter.js";

export const convertNoInputRename: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-input-rename",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
