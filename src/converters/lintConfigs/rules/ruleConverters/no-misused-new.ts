import { RuleConverter } from "../ruleConverter.js";

export const convertNoMisusedNew: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-misused-new",
            },
        ],
    };
};
