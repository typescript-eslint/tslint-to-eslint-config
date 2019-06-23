import { RuleConverter } from "../converter";

export const convertNoInferrableTypes: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-inferrable-types",
            },
        ],
    };
};
