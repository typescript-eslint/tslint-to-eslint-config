import { RuleConverter } from "../converter";

export const convertNoMisusedNew: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-misused-new",
            },
        ],
    };
};
