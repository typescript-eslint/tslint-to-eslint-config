import { RuleConverter } from "../ruleConverter";

export const convertNoFloatingPromises: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-floating-promises",
            },
        ],
    };
};
