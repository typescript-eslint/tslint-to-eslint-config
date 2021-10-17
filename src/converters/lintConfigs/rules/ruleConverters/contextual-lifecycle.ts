import { RuleConverter } from "../ruleConverter";

export const convertContextualLifecycle: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/contextual-lifecycle",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
