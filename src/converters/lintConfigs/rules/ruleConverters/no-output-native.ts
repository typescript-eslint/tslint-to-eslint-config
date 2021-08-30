import { RuleConverter } from "../ruleConverter";

export const convertNoOutputNative: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-output-native",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
