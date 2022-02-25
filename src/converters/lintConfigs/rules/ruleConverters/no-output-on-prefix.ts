import { RuleConverter } from "../ruleConverter.js";

export const convertNoOutputOnPrefix: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-output-on-prefix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
