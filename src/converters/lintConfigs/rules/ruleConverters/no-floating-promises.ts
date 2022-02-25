import { RuleConverter } from "../ruleConverter.js";

export const convertNoFloatingPromises: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-floating-promises",
            },
        ],
    };
};
