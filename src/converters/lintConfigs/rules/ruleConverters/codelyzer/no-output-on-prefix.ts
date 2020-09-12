import { RuleConverter } from "../../ruleConverter";

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
