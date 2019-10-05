import { RuleConverter } from "../converter";

export const convertStrictBooleanExpressions: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/strict-boolean-expressions",
            },
        ],
    };
};
