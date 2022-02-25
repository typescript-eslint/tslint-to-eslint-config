import { RuleConverter } from "../ruleConverter.js";

export const convertUseLifecycleInterface: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-lifecycle-interface",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
