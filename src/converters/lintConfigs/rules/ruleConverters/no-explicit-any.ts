import { RuleConverter } from "../ruleConverter";

export const convertNoExplicitAny: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-explicit-any",
            },
        ],
    };
};
