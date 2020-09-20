import { RuleConverter } from "../ruleConverter";

export const convertNoAsyncWithoutAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/require-await",
            },
        ],
    };
};
