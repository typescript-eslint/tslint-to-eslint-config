import { RuleConverter } from "../ruleConverter.js";

export const convertPromiseFunctionAsync: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/promise-function-async",
            },
        ],
    };
};
