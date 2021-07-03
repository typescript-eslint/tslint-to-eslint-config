import { RuleConverter } from "../ruleConverter";

export const convertNoAsyncWithoutAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "require-await",
                ruleSeverity: "off",
            },
            {
                ruleName: "@typescript-eslint/require-await",
            },
        ],
    };
};
