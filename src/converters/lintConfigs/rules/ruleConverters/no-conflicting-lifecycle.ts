import { RuleConverter } from "../ruleConverter.js";

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
