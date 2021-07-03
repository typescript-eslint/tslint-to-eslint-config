import { RuleConverter } from "../ruleConverter";

export const convertNoDeleteExpression: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-dynamic-delete",
            },
        ],
    };
};
