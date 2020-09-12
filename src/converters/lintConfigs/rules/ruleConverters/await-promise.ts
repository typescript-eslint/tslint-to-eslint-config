import { RuleConverter } from "../ruleConverter";

export const convertAwaitPromise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/await-thenable",
            },
        ],
    };
};
