import { RuleConverter } from "../converter";

export const convertNoFloatingPromises: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-floating-promises",
            },
        ],
    };
};
