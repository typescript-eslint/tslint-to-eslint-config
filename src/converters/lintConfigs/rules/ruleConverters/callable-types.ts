import { RuleConverter } from "../ruleConverter";

export const convertCallableTypes: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-function-type",
            },
        ],
    };
};
