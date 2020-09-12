import { RuleConverter } from "../ruleConverter";

export const convertNoNamespace: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-namespace",
            },
        ],
    };
};
