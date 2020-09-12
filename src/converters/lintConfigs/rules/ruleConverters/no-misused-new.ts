import { RuleConverter } from "../ruleConverter";

export const convertNoMisusedNew: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-misused-new",
            },
        ],
    };
};
