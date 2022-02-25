import { RuleConverter } from "../ruleConverter.js";

export const convertNoRequireImports: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-require-imports",
            },
        ],
    };
};
