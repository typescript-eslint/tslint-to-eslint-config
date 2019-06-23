import { RuleConverter } from "../converter";

export const convertCallableTypes: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-function-type",
            },
        ],
    };
};
