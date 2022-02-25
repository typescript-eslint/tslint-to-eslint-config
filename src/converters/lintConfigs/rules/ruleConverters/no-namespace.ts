import { RuleConverter } from "../ruleConverter.js";

export const convertNoNamespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-namespace",
            },
        ],
    };
};
