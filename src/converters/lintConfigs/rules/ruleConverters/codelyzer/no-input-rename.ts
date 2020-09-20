import { RuleConverter } from "../../ruleConverter";

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
