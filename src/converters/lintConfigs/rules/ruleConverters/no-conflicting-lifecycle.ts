import { RuleConverter } from "../ruleConverter";

export const convertNoConflictingLifecycle: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-conflicting-lifecycle",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
