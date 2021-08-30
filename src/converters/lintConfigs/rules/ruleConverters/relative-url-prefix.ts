import { RuleConverter } from "../ruleConverter";

export const convertRelativeUrlPrefix: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/relative-url-prefix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
