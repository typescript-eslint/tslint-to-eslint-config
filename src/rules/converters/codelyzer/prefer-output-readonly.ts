import { RuleConverter } from "../../converter";

export const convertPreferOutputReadonly: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/prefer-output-readonly",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
