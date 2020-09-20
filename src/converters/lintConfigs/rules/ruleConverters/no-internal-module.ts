import { RuleConverter } from "../ruleConverter";

export const convertNoInternalModule: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-namespace-keyword",
            },
        ],
    };
};
