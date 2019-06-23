import { RuleConverter } from "../converter";

export const convertNoInternalModule: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-namespace-keyword",
            },
        ],
    };
};
