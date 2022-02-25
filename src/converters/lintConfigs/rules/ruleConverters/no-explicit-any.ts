import { RuleConverter } from "../ruleConverter.js";

export const convertNoExplicitAny: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-explicit-any",
            },
        ],
    };
};
