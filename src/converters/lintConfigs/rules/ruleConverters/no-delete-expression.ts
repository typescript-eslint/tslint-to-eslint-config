import { RuleConverter } from "../ruleConverter.js";

export const convertNoDeleteExpression: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-dynamic-delete",
            },
        ],
    };
};
