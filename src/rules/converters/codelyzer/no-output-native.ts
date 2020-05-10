import { RuleConverter } from "../../converter";

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
