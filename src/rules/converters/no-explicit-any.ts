import { RuleConverter } from "../converter";

export const convertNoExplicitAny: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-explicit-any",
            },
        ],
    };
};
