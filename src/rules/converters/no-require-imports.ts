import { RuleConverter } from "../converter";

export const convertNoRequireImports: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-require-imports",
            },
        ],
    };
};
