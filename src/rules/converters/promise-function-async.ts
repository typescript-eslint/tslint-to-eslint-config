import { RuleConverter } from "../converter";

export const convertPromiseFunctionAsync: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/promise-function-async",
            },
        ],
    };
};
