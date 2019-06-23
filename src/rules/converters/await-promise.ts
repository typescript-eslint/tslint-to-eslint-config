import { RuleConverter } from "../converter";

export const convertAwaitPromise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/await-thenable",
            },
        ],
    };
};
