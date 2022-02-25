import { RuleConverter } from "../ruleConverter.js";

export const convertCallableTypes: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-function-type",
            },
        ],
    };
};
