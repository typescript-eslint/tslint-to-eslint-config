import { RuleConverter } from "../ruleConverter";

export const convertNoRequireImports: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-require-imports",
            },
        ],
    };
};
