import { RuleConverter } from "../ruleConverter";

export const convertPromiseFunctionAsync: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/promise-function-async",
            },
        ],
    };
};
