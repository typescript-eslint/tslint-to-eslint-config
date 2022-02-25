import { RuleConverter } from "../ruleConverter.js";

export const convertAwaitPromise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/await-thenable",
            },
        ],
    };
};
