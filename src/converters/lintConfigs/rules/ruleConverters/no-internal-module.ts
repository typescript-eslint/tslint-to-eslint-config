import { RuleConverter } from "../ruleConverter.js";

export const convertNoInternalModule: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/prefer-namespace-keyword",
            },
        ],
    };
};
